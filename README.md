# Ascensão PRO — Landing Page

Landing page premium para a aula gratuita da Ascensão PRO.
Stack: **Vite + React + TypeScript + Tailwind CSS**.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm start
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste se necessário:

```bash
cp .env.example .env
```

| Variável             | Descrição                              |
| -------------------- | -------------------------------------- |
| `VITE_CHECKOUT_URL`  | URL do botão CTA (checkout)            |
| `VITE_VIDEO_URL`     | URL do iframe do vídeo (Google Drive)  |

## Deploy no Vercel

1. Crie um repositório no GitHub e envie este projeto.
2. No [Vercel](https://vercel.com/new), importe o repositório.
3. O Vercel detecta automaticamente o framework **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. (Opcional) Adicione as variáveis de ambiente na aba *Settings → Environment Variables*.
5. Clique em **Deploy**. Pronto.

Não há servidor customizado, nenhuma dependência exótica e o `vercel.json`
já trata o SPA fallback.
