import dateFnsLocale from "date-fns/locale/pt-BR";
import type { I18nContext } from '../context/I18nContext'
import { ptBR } from '@material-ui/core/locale'
const LOCALE = 'pt-BR'

const locale: I18nContext = {
  dateFnsLocale,
  locale: LOCALE,
  intlDateTimeFormat: new Intl.DateTimeFormat(LOCALE),
  shortDateFormat: 'dd/MM/yyyy',
  materialUiLocalization: ptBR,
  invalidDateMessage: 'Data inválida'
}
export default locale
