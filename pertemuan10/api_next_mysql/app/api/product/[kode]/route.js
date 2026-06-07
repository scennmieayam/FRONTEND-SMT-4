import pool from "@/lib/db";

// Mengambil 1 data
export async function GET(req, { params }) {
  try {
    const { kode } = params;

    const [rows] = await pool.query(
      "SELECT * FROM product WHERE kode = ?",
      [kode]
    );

    if (rows.length === 0) {
      return Response.json({
        success: false,
        message: "Produk tidak ditemukan",
      });
    }

    return Response.json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

// UPDATE Data
export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const { kode, nama } = body;

    await pool.query(
      "UPDATE product SET nama = ? WHERE kode = ?",
      [nama, kode]
    );

    return Response.json({
      success: true,
      message: "Produk berhasil diupdate",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

// DELETE Data
export async function DELETE(req, { params }) {
  try {
    const { kode } = params;

    await pool.query(
      "DELETE FROM product WHERE kode = ?",
      [kode]
    );

    return Response.json({
      success: true,
      message: "Produk berhasil dihapus",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
