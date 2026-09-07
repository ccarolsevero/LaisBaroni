# Laís Baroni — site institucional

Site da psicóloga e neuropsicóloga Laís Baroni, em Next.js.

## Desenvolvimento

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) (ou a porta que o terminal indicar).

Admin do blog: [http://localhost:3000/admin](http://localhost:3000/admin)

## Variáveis de ambiente (Vercel)

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_WHATSAPP` | Número com DDI + DDD, só dígitos |
| `NEXT_PUBLIC_WHATSAPP_DISPLAY` | Como o número aparece no site |
| `NEXT_PUBLIC_EMAIL` | E-mail de contato |
| `ADMIN_USER` | Usuário do `/admin` |
| `ADMIN_PASSWORD` | Senha do `/admin` |
| `ADMIN_SECRET` | Chave da sessão do admin |
| `BLOG_GITHUB_TOKEN` | Token para gravar `content/posts.json` em produção |

Os artigos ficam em `content/posts.json`. No admin, criar/editar/excluir atualiza esse arquivo e, em produção, o commit vai para o GitHub para os textos permanecerem.
