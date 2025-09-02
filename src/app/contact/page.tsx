export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full p-3 border rounded-lg"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
