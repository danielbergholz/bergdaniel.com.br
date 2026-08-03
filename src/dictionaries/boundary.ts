import type { Locale } from "@/lib/i18n"

// Strings for the error and not-found boundaries. These render as client
// components (they read the locale from useParams), so they get their own tiny
// module instead of pulling the full dictionaries into the client bundle.
export const boundaryStrings: Record<
  Locale,
  {
    errorTitle: string
    errorBody: string
    tryAgain: string
    goHome: string
    notFoundTitle: string
    notFoundBody: string
    home: string
    homeTitle: string
  }
> = {
  en: {
    errorTitle: "Something went wrong",
    errorBody:
      "We couldn't load this page right now. This is usually temporary, so try again in a moment.",
    tryAgain: "Try again",
    goHome: "Go home",
    notFoundTitle: "Whoops 👀",
    notFoundBody:
      "It seems like you're lost, let me help you find your way back",
    home: "Home",
    homeTitle: "Go back to the homepage"
  },
  pt: {
    errorTitle: "Algo deu errado",
    errorBody:
      "Não conseguimos carregar esta página agora. Normalmente é temporário, tente de novo em instantes.",
    tryAgain: "Tentar de novo",
    goHome: "Voltar ao início",
    notFoundTitle: "Opa 👀",
    notFoundBody: "Parece que você se perdeu, deixa eu te ajudar a voltar",
    home: "Início",
    homeTitle: "Voltar para a página inicial"
  }
}
