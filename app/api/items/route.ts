type Item = {
  id: number;
  title: string;
  author: string;
  content: string;
};

let items: Item[] = [
  {
    id: 1,
    title: "Memory Lane",
    author: "Kari",
    content: "My static website project",
  },
];

export async function GET() {
  return Response.json({
    success: true,
    message: "Items retrieved successfully",
    data: items,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const newItem: Item = {
    id: items.length + 1,
    title: body.title,
    author: body.author,
    content: body.content,
  };

  items.push(newItem);

  return Response.json(
    {
      success: true,
      message: "Item created successfully",
      data: newItem,
    },
    { status: 201 },
  );
}
