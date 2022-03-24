const Nums = document.getElementsByClassName("num")


export const CompanyNumbersModule = () => {
    for (const Num of Nums) {
        const N = Math.round(Math.random() * (1000 - 100)) + 100
        for (let i = 0; i < N; i++) {
            setTimeout(() => {
                Num.querySelector("span").textContent = i
            },1000 + i)

        }
    }
}
