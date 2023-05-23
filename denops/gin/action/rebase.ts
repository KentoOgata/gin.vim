import type { Denops } from "https://deno.land/x/denops_std@v4.1.5/mod.ts";
import * as batch from "https://deno.land/x/denops_std@v4.1.5/batch/mod.ts";
import * as helper from "https://deno.land/x/denops_std@v4.1.5/helper/mod.ts";
import { define, GatherCandidates, Range } from "./core.ts";
import { exec as execBare } from "../command/bare/command.ts";

export type Candidate = { commit: string };

export async function init(
  denops: Denops,
  bufnr: number,
  gatherCandidates: GatherCandidates<Candidate>,
): Promise<void> {
  await batch.batch(denops, async (denops) => {
    await define(
      denops,
      bufnr,
      "rebase",
      (denops, bufnr, range) =>
        doRebase(denops, bufnr, range, gatherCandidates),
    );
    await define(
      denops,
      bufnr,
      "rebase:i",
      (denops, bufnr, range) =>
        doRebaseInteractive(denops, bufnr, range, gatherCandidates),
    );
  });
}

async function doRebase(
  denops: Denops,
  bufnr: number,
  range: Range,
  gatherCandidates: GatherCandidates<Candidate>,
): Promise<void> {
  const xs = await gatherCandidates(denops, bufnr, range);
  const x = xs.at(0);
  if (!x) {
    return;
  }
  await execBare(denops, [
    "rebase",
    x.commit,
  ]);
}

async function doRebaseInteractive(
  denops: Denops,
  bufnr: number,
  range: Range,
  gatherCandidates: GatherCandidates<Candidate>,
): Promise<void> {
  const xs = await gatherCandidates(denops, bufnr, range);
  const x = xs.at(0);
  if (!x) {
    return;
  }
  // NOTE:
  // We must NOT await the command otherwise Vim would freeze
  // because command proxy could not work if we await here.
  execBare(denops, [
    "rebase",
    "--interactive",
    x.commit,
  ]).catch(async (e) => {
    await helper.echoerr(denops, e.toString());
  });
}
