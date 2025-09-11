import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import {
    Background, Logo, Page, Card, H1, Lead, Section, Question, Divider, Chips, Chip, Grid, Button, Note, Error, Socials, SocialLink
} from "./styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo.png";

// dane formularza
const init = {
    gender: "",
    age: "",
    who: "",
    faculty: "",
    field: "",
    hp: "",
};

const faculties = [
    "Budownictwa, Inżynierii Środowiska i Architektury",
    "Budowy Maszyn i Lotnictwa",
    "Chemiczny",
    "Elektrotechniki i Informatyki",
    "Matematyki i Fizyki Stosowanej",
    "Mechaniczno-Technologiczny",
    "Zarządzania",
    "nie przynależę do żadnego wydziału PRz",
];

const fields = [
    "IT",
    "Finanse",
    "Jestem studentem / pracownikiem uczelni",
    "Jestem uczniem",
    "Jestem bezrobotny",
];

export default function Fr4m3() {
    const [data, setData] = useState(init);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // wskazówki do przewinięcia do pierwszego błędu
    const errAnchors = {
        gender: useRef(null),
        age: useRef(null),
        who: useRef(null),
        faculty: useRef(null),
        field: useRef(null),
    };

    const setVal = (name, value) => setData((s) => ({ ...s, [name]: value }));

    const validate = () => {
        const e = {};
        if (!data.gender) e.gender = "Wybierz odpowiedź.";
        if (!data.age) e.age = "Wybierz odpowiedź.";
        if (!data.who) e.who = "Wybierz odpowiedź.";
        if (!data.faculty) e.faculty = "Wybierz odpowiedź.";
        if (!data.field) e.field = "Wybierz odpowiedź.";
        if (data.hp) e.hp = "Spam.";
        setErrors(e);

        // scroll do pierwszego błędu
        const firstKey = Object.keys(e)[0];
        if (firstKey && errAnchors[firstKey]?.current) {
            errAnchors[firstKey].current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return Object.keys(e).length === 0;
    };

    const submit = async (ev) => {
        ev.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
        // DEMO bez backendu
        await new Promise((r) => setTimeout(r, 400));
        Swal.fire({
            icon: "success",
            title: "Dziękujemy!",
            text: "Wysłano poprawnie (demo — brak zapisu na serwerze).",
        });
        setData(init);
        setErrors({});
        } 
        catch {
            Swal.fire({ icon: "error", title: "Ups…", text: "Spróbuj ponownie." });
        } 
        finally {
        setLoading(false);
        }
    };


    return (
        <Page>
            <Logo src={logo} alt="SAITS logo" />

            {/* SEKCJA OPISU PROJEKTU (góra) */}
            <Card style={{ marginBottom: 16 }}>
                <H1>FR4M3 — opis projektu</H1>
                <Lead style={{ whiteSpace: "pre-wrap" }}>
                    {`
FR4M3 to projekt badawczy realizowany przez Koło Naukowe Politechniki Rzeszowskiej SAITS,
mający na celu zrozumienie zachowań użytkowników w kontekście bezpieczeństwa cyfrowego.

W ramach projektu przeprowadzamy ankiety, które pomagają nam zbadać,
jak różne grupy demograficzne reagują na potencjalne zagrożenia online.

Twoje odpowiedzi są anonimowe i będą wykorzystane wyłącznie do celów badawczych.
Wypełnienie ankiety zajmie około 2 minut.

Dziękujemy za Twój czas i wkład w nasze badania!
                    `}
                </Lead>
            </Card>

            {/* GŁÓWNY FORMULARZ PYTAŃ */}
            <form onSubmit={submit} noValidate>
                <Card>
                <H1>Opowiedz nam o sobie…</H1>

                {/* 1. Płeć */}
                <span ref={errAnchors.gender} />
                <Section aria-invalid={!!errors.gender}>
                    <Question>1. Płeć</Question>
                    <Chips role="radiogroup" aria-label="Płeć">
                        {["K", "M"].map((opt) => (
                        <Chip key={opt}>
                            <input
                                type="radio"
                                name="gender"
                                value={opt}
                                checked={data.gender === opt}
                                onChange={() => setVal("gender", opt)}
                            />
                            {opt}
                        </Chip>
                    ))}
                    </Chips>
                    {errors.gender && <Error>{errors.gender}</Error>}
                </Section>

                {/* 2. Wiek */}
                <span ref={errAnchors.age} />
                <Section aria-invalid={!!errors.age}>
                    <Question>2. Wiek</Question>
                    <Chips role="radiogroup" aria-label="Wiek">
                    {["<18", "18–24", "25–34", "35–44", "45+"].map((opt) => (
                        <Chip key={opt}>
                        <input
                            type="radio"
                            name="age"
                            value={opt}
                            checked={data.age === opt}
                            onChange={() => setVal("age", opt)}
                        />
                        {opt}
                        </Chip>
                    ))}
                    </Chips>
                    {errors.age && <Error>{errors.age}</Error>}
                </Section>

                {/* 3. Kim jesteś? */}
                <span ref={errAnchors.who} />
                <Section aria-invalid={!!errors.who}>
                    <Question>3. Kim jesteś?</Question>
                    <Chips role="radiogroup" aria-label="Kim jesteś">
                    {["Student", "Pracownik Uczelni", "Przypadkowy przechodzień"].map((opt) => (
                        <Chip key={opt}>
                        <input
                            type="radio"
                            name="who"
                            value={opt}
                            checked={data.who === opt}
                            onChange={() => setVal("who", opt)}
                        />
                        {opt}
                        </Chip>
                    ))}
                    </Chips>
                    {errors.who && <Error>{errors.who}</Error>}
                </Section>

                {/* 4. Wydział */}
                <span ref={errAnchors.faculty} />
                <Section aria-invalid={!!errors.faculty}>
                    <Question>4. Do jakiego wydziału należysz?</Question>
                    <Grid aria-label="Wydziały">
                    {faculties.map((opt) => (
                        <Chip key={opt}>
                        <input
                            type="radio"
                            name="faculty"
                            value={opt}
                            checked={data.faculty === opt}
                            onChange={() => setVal("faculty", opt)}
                        />
                        {opt}
                        </Chip>
                    ))}
                    </Grid>
                    {errors.faculty && <Error>{errors.faculty}</Error>}
                </Section>

                {/* 5. Dziedzina pracy */}
                <span ref={errAnchors.field} />
                <Section aria-invalid={!!errors.field}>
                    <Question>5. W jakiej dziedzinie pracujesz?</Question>
                    <Grid aria-label="Dziedziny">
                    {fields.map((opt) => (
                        <Chip key={opt}>
                        <input
                            type="radio"
                            name="field"
                            value={opt}
                            checked={data.field === opt}
                            onChange={() => setVal("field", opt)}
                        />
                        {opt}
                        </Chip>
                    ))}
                    </Grid>
                    {errors.field && <Error>{errors.field}</Error>}
                </Section>

                {/* honeypot (anty-spam) */}
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                    <label>Nie wypełniaj
                    <input
                        tabIndex={-1}
                        autoComplete="off"
                        name="hp"
                        value={data.hp}
                        onChange={(e) => setVal("hp", e.target.value)}
                    />
                    </label>
                </div>

                {/* przycisk */}
                <Section>
                    <Button type="submit" disabled={loading}>
                    {loading ? "Wysyłanie…" : "Wyślij"}
                    </Button>
                </Section>
                </Card>
            </form>

            {/* SEKCJA OPISU ZAGROŻENIA (dół) */}
            <Card style={{ marginTop: 16 }}>
                <H1>Opis zagrożenia</H1>
                <Lead style={{ whiteSpace: "pre-wrap" }}>
                    {`
Pamiętaj o zagrożeniach, np. fałszywych kodach QR, phishingu i złośliwych linkach.

Zawsze sprawdzaj domenę, nie podawaj haseł w nieznanych formularzach i nie instaluj niezweryfikowanych aplikacji. W razie wątpliwości skontaktuj się z SAITS.
                    `}
                </Lead>
            </Card>

            {/* SOCIAL MEDIA — miejsce na linki/ikony */}
            <Socials>
                {/* podmień hrefy / dodaj ikony z react-icons jeśli chcesz */}
                <SocialLink href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</SocialLink>
                <SocialLink href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</SocialLink>
            </Socials>


        </Page>
    );
}