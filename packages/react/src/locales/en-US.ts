import dateFnsLocale from "date-fns/locale/en-US";
import type { I18nContext } from '../context/I18nContext'
import { enUS } from '@material-ui/core/locale'
const LOCALE = 'en-US'

const locale: I18nContext = {
  dateFnsLocale,
  locale: LOCALE,
  intlDateTimeFormat: new Intl.DateTimeFormat(LOCALE),
  shortDateFormat: 'MM/dd/yyyy',
  materialUiLocalization: enUS
}
export default locale
