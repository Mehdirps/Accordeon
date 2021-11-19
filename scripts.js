let details = document.querySelectorAll("details");

// console.log(offre.hidden);
for (let detail of details) {

    detail.addEventListener("mouseover", () => {

        // detail.setAttribute("open", "");
        detail.open = true;

    });

    detail.addEventListener("mouseout", () => {

        // detail.removeAttribute("open", "");
        detail.open = false;

    });
    detail.addEventListener("click", () => {

        for (let detail2 of details) {

            if (detail !== detail2) {

                detail2.removeAttribute("open");
            }

        }

    });
}