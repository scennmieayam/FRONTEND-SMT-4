import { connect } from "@/lib/db";

export async function GET() {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM products");
    return Response.json(rows);
}
