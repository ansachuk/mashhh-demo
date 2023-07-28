import { useDispatch, useSelector } from "react-redux";
import { setCountry, setCurrency, setLanguage } from "redux/meta/metaSlice";
import { countries, currencies, langueges } from "redux/meta/constants";

import { Formik } from "formik";

import { MetaForm, MetaField, Wrapper } from "./Meta.styled";
import { selectCountry, selectCurrency, selectLang } from "redux/meta/selectors";

export default function Meta() {
	const disp = useDispatch();
	const language = useSelector(selectLang);
	const country = useSelector(selectCountry);
	const currency = useSelector(selectCurrency);

	const handleSelectChange = e => {
		const { name, value } = e.target;
		switch (name) {
			case "country":
				disp(setCountry(value));
				break;

			case "currency":
				disp(setCurrency(value));
				break;

			case "language":
				disp(setLanguage(value));
				break;

			default:
				throw new Error("Wrong type!");
		}
	};

	return (
		<Formik initialValues={{ language: "en", country: "England", currency: "usd" }}>
			<MetaForm>
				<MetaField value={language} onChange={handleSelectChange} as="select" name="language">
					{langueges.map(el => (
						<option key={el} value={el}>
							{el}
						</option>
					))}
				</MetaField>
				<Wrapper>
					<label>
						Country:
						<MetaField value={country} onChange={handleSelectChange} as="select" name="country" $textTrans="country">
							{countries.map(el => (
								<option key={el} value={el}>
									{el}
								</option>
							))}
						</MetaField>
					</label>
					<label>
						Currency:
						<MetaField value={currency} onChange={handleSelectChange} as="select" name="currency">
							{currencies.map(el => (
								<option key={el} value={el}>
									{el}
								</option>
							))}
						</MetaField>
					</label>
				</Wrapper>
			</MetaForm>
		</Formik>
	);
}
