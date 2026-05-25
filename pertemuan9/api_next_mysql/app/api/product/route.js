import pool from "@/lib/db";

// Tampilkan Semua Data (GET)
export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM product");

    return Response.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

// Input Produk Baru
export async function POST(req) {
  try {
    const body = await req.json();

    const { kode, nama } = body;

    await pool.query(
      "INSERT INTO product (kode, nama) VALUES (?, ?)",
      [kode, nama]
    );

    return Response.json({
      success: true,
      message: "Produk berhasil ditambahkan",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
