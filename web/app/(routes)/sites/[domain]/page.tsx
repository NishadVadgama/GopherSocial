export default function Page({ params }: { params: { domain: string } }) {
  return <div>Hello {params.domain}</div>;
}
