const quotes = [
    {
        quote: "모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니 그리스도 예수 아네 있는 구속으로 말미암아 하나님의 은혜로 값 없이 의롭다 하심을 얻은 자 되었느니라.",
        author: "로마서 3:23-24"
    },
    {
        quote: "그러나 내가 주는 물을 마시는 사람은, 영원히 목 마르지 아니할 것이다. 내가 주는 물은, 그 사람 속에서, 영생에 이르게 하는 샘물이 될 것이다.",
        author: "요한복음 4:14"
    },
    {
        quote: "영생은 곧 유일하신 참 하나님과 그의 보내신 자 예수 그리스도를 아는 것이니이다.",
        author: "요한복음 17:3"
    },
    {
        quote: "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 산 것이 아니요 오직 내 안에 그리스도께서 사신 것이라 이제 내가 육체 가운데 사는 것은 나를 사랑하사 나를 위하여 자기 몸을 버리신 하나님의 아들을 믿는 믿음 안에서 사는 것이라.",
        author: "갈라디아서 2:20"
    },
    {
        quote: "여호와는 나의 목자시니 내가 부족함이 없으리로다.",
        author: "시편 23:1"
    },
    {
        quote: "내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다.",
        author: "시편 23:4"
    },
    {
        quote: "내 영혼이 잠잠히 하나님만을 기다림은 나의 구원이 그에게서만 나오기 때문이다.",
        author: "시편 62:1"
    },
    {
        quote: "아무것도 염려하지 말고 오직 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나니므이 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키리라.",
        author: "빌립보서 4:6-7"
    },
    {
        quote: "하나님께서 세상을 이처럼 사랑하셔서 외아들을 주셨으니, 이는 그를 믿는 사람마다 멸망하지 않고 영생을 얻게 하려는 것이다.",
        author: "요한복음 3:16"
    },
    {
        quote: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이는 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라.",
        author: "데살로니가전서 5:16-18"
    },
    {
        quote: "구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요 문을 두드리라 그러면 너희에게 열릴 것이니.",
        author: "마태복음 7:7"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]
// quote.classList.add("quote");

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;