import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="text-center">
        <span className="kicker">404</span>
        <h1 className="display-lg mt-5">Página no encontrada</h1>
        <p className="lead mt-4 text-ink-muted">
          La página que buscas no existe o se ha movido.
        </p>
        <Link href="/" className="btn-outline mt-10">
          Volver al inicio
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
