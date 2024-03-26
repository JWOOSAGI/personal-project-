'use client'

interface ICompany {
    company: String,
    contact: String,
    country: String
}

const Company = (props: ICompany) => {
    return (
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
};

export default function Companies() {
    const articles = [

        {
            company: "Alfreds Futterkiste",
            contact: "Maria Anders",
            country: "Germany"
        },

        {
            company: "Centro comercial Moctezuma",
            contact: "Francisco Chang",
            country: "Mexico"
        },

        {
            company: "Ernst Handel",
            contact: "Roland Mendel",
            country: "Austria"
        },

        {
            company: "Island Trading",
            contact: "Helen Bennett",
            country: "UK"
        },

        {
            company: "Laughing Bacchus Winecellars",
            contact: "Yoshi Tannamuri",
            country: "Canada"
        },

        {
            company: "Magazzini Alimentari Riuniti",
            contact: "Giovanni Rovelli",
            country: "Italy"
        }

    ]
    const companyMap = articles.map((v, i) =>
        (<Company key={i} {...v} />))
    return (<>

        <h2>게시판</h2>
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {companyMap}
            </tbody>
        </table>

    </>)
}