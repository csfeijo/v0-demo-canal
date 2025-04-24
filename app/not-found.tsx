import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Página Não Encontrada</h2>
      <p className="mt-2 text-muted-foreground text-center">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Voltar para a Página Inicial</Link>
      </Button>
    </div>
  )
}
