// Funções de apoio usadas pelos componentes. Não precisa mexer aqui.
import fs from "node:fs";
import path from "node:path";

/** Link do WhatsApp já com a mensagem pronta. */
export function linkWhatsapp(contato) {
  return `https://wa.me/${contato.whatsapp_numero}?text=${encodeURIComponent(contato.whatsapp_mensagem)}`;
}

/** Transforma *palavra* em texto colorido, com segurança. */
export function marcar(texto = "") {
  const seguro = String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return seguro.replace(/\*(.+?)\*/g, '<span class="destaque">$1</span>');
}

/** Diz se a foto já foi colocada em public/imagens/fotos. */
export function fotoExiste(arquivo) {
  if (!arquivo) return false;
  return fs.existsSync(path.join(process.cwd(), "public", "imagens", "fotos", arquivo));
}
