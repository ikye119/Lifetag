import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

export type StoredProfile = {
  publicId: string; ownerHash: string; fullName: string; dateOfBirth: string;
  bloodGroup: string; allergies: string; conditions: string; instructions: string;
  language: string; contactName: string; contactPhone: string;
  createdAt: string; updatedAt: string; qrVersion: number;
};
export type StoredEvent = { id: number; profileId: string; action: string; location: string; createdAt: string };
type Database = { profiles: Record<string, StoredProfile>; events: Record<string, StoredEvent[]> };

const directory = path.join(process.cwd(), "data");
const filename = path.join(directory, "lifetag.json");
const empty = (): Database => ({ profiles: {}, events: {} });

export async function readDatabase(): Promise<Database> {
  try { return JSON.parse(await readFile(filename, "utf8")) as Database; }
  catch { return empty(); }
}

export async function writeDatabase(database: Database) {
  await mkdir(directory, { recursive: true });
  const temporary = `${filename}.${crypto.randomUUID()}.tmp`;
  await writeFile(temporary, JSON.stringify(database, null, 2), "utf8");
  await rename(temporary, filename);
}
