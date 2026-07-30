export function ContentSection() {
  return (
    <section id="conteudo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="hud-label inline-flex items-center gap-2 mb-4">
          <span className="w-4 h-px bg-signal" />
          Conteúdo
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-foreground mb-2 max-w-2xl">
          Ainda não tenho um lançamento pra anunciar. E tá tudo bem
        </h2>
        <p className="text-base text-muted max-w-[560px]">
          Building in public é documentar o processo real, inclusive o que ainda não está pronto. Não
          vou inventar um anúncio só pra preencher espaço aqui. Quando o próximo negócio, produto ou
          conteúdo sair do papel, o registro do processo, decisão, número e erro incluído, aparece
          primeiro nesta seção.
        </p>
      </div>
    </section>
  );
}
