export async function GET() {
  return Response.json([{ id: 1, message: 'Cześć!' }]);
}

export async function POST(request) {
  const body = await request.json();

  if (!body.message) {
    return Response.json({ error: 'Pole message jest wymagane' }, { status: 400 });
  }

  return Response.json({ id: Date.now(), message: body.message }, { status: 201 });
}