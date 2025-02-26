import {NextResponse} from "next/server";
import monsters from "@/data/monsters.json";

export async function GET() {
    return NextResponse.json(monsters)
}