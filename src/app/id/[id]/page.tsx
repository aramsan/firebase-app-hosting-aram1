export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  console.log("page", id);
  return <div>ID: {id}</div>
}