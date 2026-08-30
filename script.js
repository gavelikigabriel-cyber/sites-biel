```javascript
/* =========================================================
   PARADA DO LANCHE
   SCRIPT.JS
   Carrinho + Produtos + Checkout + WhatsApp
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const CONFIG = {

    /*
     * TROQUE ESTE NÚMERO PELO WHATSAPP REAL DA LANCHONETE.
     *
     * Formato:
     * Brasil + DDD + número
     *
     * Exemplo:
     * 41999999999
     */
    whatsapp: "5541999999999",

    /*
     * Valor da entrega.
     */
    deliveryFee: 5.00
};


/* =========================================================
   PRODUTOS
========================================================= */

const products = [

    {
        id: 1,
        name: "Parada Classic",
        category: "Hambúrgueres",
        description:
            "Pão brioche, hambúrguer artesanal, queijo, alface, tomate e molho especial.",
        price: 22.90,
        oldPrice: 26.90,
        badge: "Mais pedido",
        hot: true,
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 2,
        name: "Cheddar Bacon",
        category: "Hambúrgueres",
        description:
            "Hambúrguer artesanal, cheddar cremoso, bacon crocante e molho especial.",
        price: 27.90,
        oldPrice: 31.90,
        badge: "🔥 Hot",
        hot: true,
        image:
            "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 3,
        name: "Duplo Parada",
        category: "Hambúrgueres",
        description:
            "Dois hambúrgueres artesanais, queijo duplo, cebola e molho da casa.",
        price: 31.90,
        oldPrice: 35.90,
        badge: "Especial",
        hot: true,
        image:
            "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 4,
        name: "Combo Classic",
        category: "Combos",
        description:
            "Parada Classic + batata frita + refrigerante lata.",
        price: 32.90,
        oldPrice: 38.90,
        badge: "Combo",
        hot: false,
        image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 5,
        name: "Combo Bacon",
        category: "Combos",
        description:
            "Cheddar Bacon + batata frita + refrigerante lata.",
        price: 37.90,
        oldPrice: 42.90,
        badge: "🔥 Promo",
        hot: true,
        image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 6,
        name: "Batata Frita",
        category: "Porções",
        description:
            "Batata frita crocante, sequinha e deliciosa.",
        price: 14.90,
        oldPrice: null,
        badge: null,
        hot: false,
        image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        name: "Batata com Cheddar e Bacon",
        category: "Porções",
        description:
            "Batata frita coberta com cheddar cremoso e bacon crocante.",
        price: 22.90,
        oldPrice: null,
        badge: "Mais pedido",
        hot: false,
        image:
            "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 8,
        name: "Hot Dog Especial",
        category: "Hot Dogs",
        description:
            "Pão macio, salsicha, queijo, milho, batata palha e molho especial.",
        price: 19.90,
        oldPrice: null,
        badge: null,
        hot: false,
        image:
            "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 9,
        name: "Cachorro Quente Bacon",
        category: "Hot Dogs",
        description:
            "Hot dog especial com bacon crocante e cheddar.",
        price: 23.90,
        oldPrice: null,
        badge: "🔥 Hot",
        hot: true,
        image:
            "https://images.unsplash.com/photo-1612392061780-7c7e7a6c9b17?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 10,
        name: "Coca-Cola Lata",
        category: "Bebidas",
        description:
            "Refrigerante Coca-Cola lata 350ml.",
        price: 6.00,
        oldPrice: null,
        badge: null,
        hot: false,
        image:
            "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 11,
        name: "Guaraná Lata",
        category: "Bebidas",
        description:
            "Refrigerante Guaraná lata 350ml.",
        price: 6.00,
        oldPrice: null,
        badge: null,
        hot: false,
        image:
            "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 12,
        name: "Milk Shake Chocolate",
        category: "Sobremesas",
        description:
            "Milk shake cremoso de chocolate.",
        price: 15.90,
        oldPrice: null,
        badge: "Novo",
        hot: false,
        image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85"
    }

];


/* =========================================================
   ESTADO DO SITE
========================================================= */

let cart = [];

let selectedCategory = "Todos";

let selectedProduct = null;

let modalQuantity = 1;


/* =========================================================
   ELEMENTOS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const popularGrid =
    document.getElementById("popularGrid");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const productModal =
    document.getElementById("productModal");

const cartOverlay =
    document.getElementById("cartOverlay");

const checkoutOverlay =
    document.getElementById("checkoutOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartFooter =
    document.getElementById("cartFooter");

const cartCount =
    document.getElementById("cartCount");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartDelivery =
    document.getElementById("cartDelivery");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const modalProductImage =
    document.getElementById("modalProductImage");

const modalProductName =
    document.getElementById("modalProductName");

const modalProductCategory =
    document.getElementById("modalProductCategory");

const modalProductDescription =
    document.getElementById("modalProductDescription");

const modalProductPrice =
    document.getElementById("modalProductPrice");

const modalQuantityElement =
    document.getElementById("modalQuantity");

const modalTotal =
    document.getElementById("modalTotal");

const toast =
    document.getElementById("toast");

const toastTitle =
    document.getElementById("toastTitle");

const toastMessage =
    document.getElementById("toastMessage");

const needChange =
    document.getElementById("needChange");

const changeGroup =
    document.getElementById("changeGroup");

const changeFor =
    document.getElementById("changeFor");

const checkoutForm =
    document.getElementById("checkoutForm");


/* =========================================================
   FORMATAÇÃO DE PREÇO
========================================================= */

function formatPrice(value) {

    const number = Number(value) || 0;

    return number.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


/* =========================================================
   ESCAPAR HTML
   Evita problemas quando informações são colocadas
   dentro do HTML do carrinho.
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveCart() {

    try {

        localStorage.setItem(
            "paradaDoLancheCart",
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Não foi possível salvar o carrinho.",
            error
        );
    }
}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "paradaDoLancheCart"
            );

        if (!saved) {

            cart = [];

            return;
        }

        const parsed =
            JSON.parse(saved);

        if (!Array.isArray(parsed)) {

            cart = [];

            return;
        }

        cart = parsed
            .filter(item =>
                item &&
                Number.isFinite(Number(item.productId)) &&
                Number(item.quantity) > 0
            )
            .map(item => ({
                productId: Number(item.productId),
                quantity: Math.max(
                    1,
                    Number(item.quantity)
                ),
                extras: Array.isArray(item.extras)
                    ? item.extras
                    : []
            }));

    } catch (error) {

        console.warn(
            "Carrinho antigo inválido. Limpando...",
            error
        );

        cart = [];

        try {

            localStorage.removeItem(
                "paradaDoLancheCart"
            );

        } catch (storageError) {

            console.warn(storageError);
        }
    }
}


/* =========================================================
   ENCONTRAR PRODUTO
========================================================= */

function getProduct(productId) {

    return products.find(
        product =>
            Number(product.id) ===
            Number(productId)
    );
}


/* =========================================================
   PREÇO DOS EXTRAS
========================================================= */

function getExtrasTotal(extras = []) {

    if (!Array.isArray(extras)) {
        return 0;
    }

    return extras.reduce(
        (total, extra) => {

            const price =
                Number(extra.price) || 0;

            return total + price;

        },
        0
    );
}


/* =========================================================
   PREÇO DE UM ITEM
========================================================= */

function getCartItemUnitPrice(item) {

    const product =
        getProduct(item.productId);

    if (!product) {
        return 0;
    }

    return (
        Number(product.price) +
        getExtrasTotal(item.extras)
    );
}


/* =========================================================
   SUBTOTAL
========================================================= */

function getCartSubtotal() {

    return cart.reduce(
        (total, item) => {

            const quantity =
                Math.max(
                    1,
                    Number(item.quantity) || 1
                );

            const unitPrice =
                getCartItemUnitPrice(item);

            return total +
                (unitPrice * quantity);

        },
        0
    );
}


/* =========================================================
   QUANTIDADE TOTAL DE PRODUTOS
========================================================= */

function getCartCount() {

    return cart.reduce(
        (total, item) => {

            return total +
                Math.max(
                    1,
                    Number(item.quantity) || 1
                );

        },
        0
    );
}


/* =========================================================
   TOTAL
========================================================= */

function getCartTotal() {

    const subtotal =
        getCartSubtotal();

    if (subtotal <= 0) {
        return 0;
    }

    return subtotal +
        Number(CONFIG.deliveryFee || 0);
}


/* =========================================================
   RENDERIZAR PRODUTOS
========================================================= */

function renderProducts() {

    if (!productsGrid) {
        return;
    }

    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    const filtered =
        products.filter(product => {

            const matchesCategory =
                selectedCategory === "Todos" ||
                product.category ===
                    selectedCategory;

            const searchable =
                (
                    product.name +
                    " " +
                    product.description +
                    " " +
                    product.category
                ).toLowerCase();

            const matchesSearch =
                !search ||
                searchable.includes(search);

            return (
                matchesCategory &&
                matchesSearch
            );
        });


    productsGrid.innerHTML = "";


    if (filtered.length === 0) {

        if (emptyState) {
            emptyState.classList.remove("hidden");
        }

        return;
    }


    if (emptyState) {
        emptyState.classList.add("hidden");
    }


    const fragment =
        document.createDocumentFragment();


    filtered.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        const badge =
            product.badge
                ? `
                    <span class="product-badge ${product.hot ? "hot" : ""}">
                        ${escapeHTML(product.badge)}
                    </span>
                `
                : "";


        const oldPrice =
            product.oldPrice
                ? `
                    <small>
                        ${formatPrice(product.oldPrice)}
                    </small>
                `
                : "";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                >

                ${badge}

            </div>


            <div class="product-content">

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h3>
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>


                <div class="product-bottom">

                    <div class="product-price">

                        ${oldPrice}

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                    </div>


                    <button
                        type="button"
                        class="add-button"
                        data-product-id="${product.id}"
                        aria-label="Adicionar ${escapeHTML(product.name)}"
                    >
                        +
                    </button>

                </div>

            </div>
        `;


        const addButton =
            card.querySelector(
                ".add-button"
            );


        if (addButton) {

            addButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openProductModal(
                        product.id
                    );
                }
            );
        }


        card.addEventListener(
            "click",
            event => {

                if (
                    event.target.closest(
                        ".add-button"
                    )
                ) {
                    return;
                }

                openProductModal(
                    product.id
                );
            }
        );


        fragment.appendChild(card);

    });


    productsGrid.appendChild(fragment);
}


/* =========================================================
   MAIS PEDIDOS
========================================================= */

function renderPopularProducts() {

    if (!popularGrid) {
        return;
    }

    const popularIds =
        [1, 2, 4, 5];

    popularGrid.innerHTML = "";


    popularIds.forEach(id => {

        const product =
            getProduct(id);

        if (!product) {
            return;
        }


        const card =
            document.createElement("article");

        card.className =
            "popular-card";


        card.innerHTML = `

            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
            >

            <div class="popular-card-content">

                <h3>
                    ${escapeHTML(product.name)}
                </h3>

                <div class="popular-card-bottom">

                    <span>
                        ${escapeHTML(product.category)}
                    </span>

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                </div>

            </div>
        `;


        card.addEventListener(
            "click",
            () => {

                openProductModal(
                    product.id
                );

            }
        );


        popularGrid.appendChild(card);

    });
}


/* =========================================================
   CATEGORIAS
========================================================= */

function updateCategoryButtons() {

    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(button => {

            const category =
                button.dataset.category;

            if (
                category ===
                selectedCategory
            ) {

                button.classList.add(
                    "active"
                );

            } else {

                button.classList.remove(
                    "active"
                );

            }

        });
}


/* =========================================================
   SELECIONAR CATEGORIA
========================================================= */

function selectCategory(category) {

    selectedCategory =
        category || "Todos";

    updateCategoryButtons();

    renderProducts();

    const menu =
        document.getElementById(
            "cardapio"
        );

    if (menu) {

        menu.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================================================
   MODAL DO PRODUTO
========================================================= */

function openProductModal(productId) {

    const product =
        getProduct(productId);

    if (!product) {

        showToast(
            "Erro",
            "Produto não encontrado."
        );

        return;
    }


    selectedProduct =
        product;

    modalQuantity = 1;


    if (modalProductImage) {

        modalProductImage.src =
            product.image;

        modalProductImage.alt =
            product.name;
    }


    if (modalProductName) {
        modalProductName.textContent =
            product.name;
    }


    if (modalProductCategory) {
        modalProductCategory.textContent =
            product.category;
    }


    if (modalProductDescription) {
        modalProductDescription.textContent =
            product.description;
    }


    if (modalProductPrice) {
        modalProductPrice.textContent =
            formatPrice(product.price);
    }


    document
        .querySelectorAll(
            "#customizationArea input[type='checkbox']"
        )
        .forEach(input => {

            input.checked = false;

        });


    updateModal();


    if (productModal) {

        productModal.classList.remove(
            "hidden"
        );

    }


    updateBodyLock();
}


/* =========================================================
   ATUALIZAR MODAL
========================================================= */

function updateModal() {

    if (!selectedProduct) {
        return;
    }


    const extras =
        getSelectedExtras();


    const extrasTotal =
        getExtrasTotal(extras);


    const quantity =
        Math.max(
            1,
            Number(modalQuantity) || 1
        );


    const total =
        (
            Number(selectedProduct.price) +
            extrasTotal
        ) * quantity;


    if (modalQuantityElement) {

        modalQuantityElement.textContent =
            quantity;
    }


    if (modalTotal) {

        modalTotal.textContent =
            formatPrice(total);
    }

}


/* =========================================================
   EXTRAS SELECIONADOS
========================================================= */

function getSelectedExtras() {

    const extras = [];


    document
        .querySelectorAll(
            "#customizationArea input[type='checkbox']:checked"
        )
        .forEach(input => {

            const price =
                Number(input.value) || 0;

            const name =
                input.dataset.name ||
                "Adicional";


            extras.push({
                name,
                price
            });

        });


    return extras;
}


/* =========================================================
   FECHAR MODAL PRODUTO
========================================================= */

function closeProductModal() {

    if (productModal) {

        productModal.classList.add(
            "hidden"
        );

    }

    selectedProduct = null;

    updateBodyLock();
}


/* =========================================================
   ADICIONAR AO CARRINHO
========================================================= */

function addSelectedProductToCart() {

    if (!selectedProduct) {

        showToast(
            "Erro",
            "Selecione um produto."
        );

        return;
    }


    const quantity =
        Math.max(
            1,
            Number(modalQuantity) || 1
        );


    const extras =
        getSelectedExtras();


    /*
     * Criamos uma chave com os adicionais.
     * Assim o mesmo hambúrguer com bacon
     * pode ser separado do hambúrguer sem bacon.
     */
    const extrasKey =
        extras
            .map(extra =>
                `${extra.name}:${extra.price}`
            )
            .sort()
            .join("|");


    const existingIndex =
        cart.findIndex(item => {

            const itemExtras =
                Array.isArray(item.extras)
                    ? item.extras
                    : [];

            const itemKey =
                itemExtras
                    .map(extra =>
                        `${extra.name}:${extra.price}`
                    )
                    .sort()
                    .join("|");


            return (
                Number(item.productId) ===
                    Number(selectedProduct.id)
                &&
                itemKey === extrasKey
            );

        });


    if (existingIndex >= 0) {

        cart[existingIndex].quantity +=
            quantity;

    } else {

        cart.push({

            productId:
                Number(selectedProduct.id),

            quantity,

            extras

        });

    }


    saveCart();

    renderCart();

    updateCartCount();

    closeProductModal();


    showToast(
        "Adicionado!",
        `${selectedProduct.name} foi adicionado ao carrinho.`
    );


    /*
     * Não abre o carrinho automaticamente.
     * Isso evita travamentos e deixa o usuário
     * continuar escolhendo produtos.
     */
}


/* =========================================================
   RENDERIZAR CARRINHO
========================================================= */

function renderCart() {

    if (!cartItems) {
        return;
    }


    /*
     * Remove produtos que não existem mais.
     */
    cart = cart.filter(item =>
        getProduct(item.productId)
    );


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        if (cartEmpty) {
            cartEmpty.classList.remove(
                "hidden"
            );
        }

        if (cartFooter) {
            cartFooter.classList.add(
                "hidden"
            );
        }

        updateCartTotals();

        return;
    }


    if (cartEmpty) {
        cartEmpty.classList.add(
            "hidden"
        );
    }


    if (cartFooter) {
        cartFooter.classList.remove(
            "hidden"
        );
    }


    const fragment =
        document.createDocumentFragment();


    cart.forEach(
        (item, index) => {

            const product =
                getProduct(
                    item.productId
                );


            if (!product) {
                return;
            }


            const quantity =
                Math.max(
                    1,
                    Number(item.quantity) || 1
                );


            const extras =
                Array.isArray(item.extras)
                    ? item.extras
                    : [];


            const extrasText =
                extras.length
                    ? extras
                        .map(extra =>
                            extra.name
                        )
                        .join(", ")
                    : "Sem adicionais";


            const unitPrice =
                getCartItemUnitPrice(item);


            const itemTotal =
                unitPrice * quantity;


            const element =
                document.createElement("div");


            element.className =
                "cart-item";


            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${escapeHTML(product.image)}"
                        alt="${escapeHTML(product.name)}"
                    >

                </div>


                <div class="cart-item-info">

                    <h4>
                        ${escapeHTML(product.name)}
                    </h4>

                    <small>
                        ${escapeHTML(extrasText)}
                    </small>

                    <div class="cart-item-price">
                        ${formatPrice(itemTotal)}
                    </div>


                    <div class="cart-item-actions">

                        <div class="mini-quantity">

                            <button
                                type="button"
                                data-action="decrease"
                                data-index="${index}"
                                aria-label="Diminuir quantidade"
                            >
                                −
                            </button>

                            <strong>
                                ${quantity}
                            </strong>

                            <button
                                type="button"
                                data-action="increase"
                                data-index="${index}"
                                aria-label="Aumentar quantidade"
                            >
                                +
                            </button>

                        </div>


                        <button
                            type="button"
                            class="remove-item"
                            data-action="remove"
                            data-index="${index}"
                        >
                            Remover
                        </button>

                    </div>

                </div>
            `;


            fragment.appendChild(element);

        }
    );


    cartItems.appendChild(fragment);


    /*
     * Um único listener para o carrinho.
     * Evita centenas de listeners e possíveis conflitos.
     */
    cartItems
        .querySelectorAll("[data-action]")
        .forEach(button => {

            button.addEventListener(
                "click",
                handleCartAction
            );

        });


    updateCartTotals();

    saveCart();
}


/* =========================================================
   AÇÕES DO CARRINHO
========================================================= */

function handleCartAction(event) {

    const button =
        event.currentTarget;

    const action =
        button.dataset.action;

    const index =
        Number(button.dataset.index);


    if (
        !Number.isInteger(index) ||
        !cart[index]
    ) {

        return;
    }


    if (action === "increase") {

        cart[index].quantity += 1;

    }


    if (action === "decrease") {

        cart[index].quantity -= 1;


        if (
            cart[index].quantity <= 0
        ) {

            cart.splice(index, 1);

        }

    }


    if (action === "remove") {

        cart.splice(index, 1);

    }


    saveCart();

    renderCart();

    updateCartCount();
}


/* =========================================================
   ATUALIZAR TOTAIS
========================================================= */

function updateCartTotals() {

    const subtotal =
        getCartSubtotal();


    const delivery =
        subtotal > 0
            ? Number(CONFIG.deliveryFee)
            : 0;


    const total =
        subtotal + delivery;


    if (cartSubtotal) {

        cartSubtotal.textContent =
            formatPrice(subtotal);

    }


    if (cartDelivery) {

        cartDelivery.textContent =
            formatPrice(delivery);

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);

    }


    if (checkoutTotal) {

        checkoutTotal.textContent =
            formatPrice(total);

    }
}


/* =========================================================
   CONTADOR
========================================================= */

function updateCartCount() {

    const count =
        getCartCount();


    if (cartCount) {

        cartCount.textContent =
            count;

    }
}


/* =========================================================
   ABRIR CARRINHO
========================================================= */

function openCart() {

    renderCart();

    updateCartCount();


    if (cartOverlay) {

        cartOverlay.classList.remove(
            "hidden"
        );

    }


    updateBodyLock();
}


/* =========================================================
   FECHAR CARRINHO
========================================================= */

function closeCart() {

    if (cartOverlay) {

        cartOverlay.classList.add(
            "hidden"
        );

    }


    updateBodyLock();
}


/* =========================================================
   ABRIR CHECKOUT
========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Carrinho vazio",
            "Adicione pelo menos um produto."
        );

        return;
    }


    updateCartTotals();


    closeCart();


    if (checkoutOverlay) {

        checkoutOverlay.classList.remove(
            "hidden"
        );

    }


    updateBodyLock();
}


/* =========================================================
   FECHAR CHECKOUT
========================================================= */

function closeCheckout() {

    if (checkoutOverlay) {

        checkoutOverlay.classList.add(
            "hidden"
        );

    }


    updateBodyLock();
}


/* =========================================================
   BLOQUEAR BODY
========================================================= */

function updateBodyLock() {

    const productOpen =
        productModal &&
        !productModal.classList.contains(
            "hidden"
        );


    const cartOpen =
        cartOverlay &&
        !cartOverlay.classList.contains(
            "hidden"
        );


    const checkoutOpen =
        checkoutOverlay &&
        !checkoutOverlay.classList.contains(
            "hidden"
        );


    if (
        productOpen ||
        cartOpen ||
        checkoutOpen
    ) {

        document.body.classList.add(
            "modal-open"
        );

    } else {

        document.body.classList.remove(
            "modal-open"
        );

    }
}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout = null;


function showToast(
    title,
    message
) {

    if (!toast) {
        return;
    }


    if (toastTitle) {
        toastTitle.textContent =
            title;
    }


    if (toastMessage) {
        toastMessage.textContent =
            message;
    }


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );
}


/* =========================================================
   CHECKOUT - TROCO
========================================================= */

function updateChangeBox() {

    if (!needChange || !changeGroup) {
        return;
    }


    if (needChange.checked) {

        changeGroup.classList.remove(
            "hidden"
        );

    } else {

        changeGroup.classList.add(
            "hidden"
        );

        if (changeFor) {
            changeFor.value = "";
        }
    }
}


/* =========================================================
   FINALIZAR PELO WHATSAPP
========================================================= */

function submitOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast(
            "Carrinho vazio",
            "Adicione produtos antes de finalizar."
        );

        return;
    }


    /*
     * checkValidity() é usado antes
     * de coletar os dados.
     */
    if (
        checkoutForm &&
        !checkoutForm.checkValidity()
    ) {

        checkoutForm.reportValidity();

        return;
    }


    const customerName =
        document
            .getElementById(
                "customerName"
            )
            ?.value
            .trim() || "";


    const customerPhone =
        document
            .getElementById(
                "customerPhone"
            )
            ?.value
            .trim() || "";


    const address =
        document
            .getElementById(
                "customerAddress"
            )
            ?.value
            .trim() || "";


    const number =
        document
            .getElementById(
                "customerNumber"
            )
            ?.value
            .trim() || "";


    const complement =
        document
            .getElementById(
                "customerComplement"
            )
            ?.value
            .trim() || "";


    const reference =
        document
            .getElementById(
                "customerReference"
            )
            ?.value
            .trim() || "";


    const observation =
        document
            .getElementById(
                "customerObservation"
            )
            ?.value
            .trim() || "";


    const payment =
        document.querySelector(
            "input[name='payment']:checked"
        )?.value ||
        "Pix";


    const subtotal =
        getCartSubtotal();


    const delivery =
        Number(CONFIG.deliveryFee);


    const total =
        getCartTotal();


    let changeText =
        "Não precisa de troco.";


    if (
        needChange &&
        needChange.checked
    ) {

        const changeValue =
            Number(
                changeFor?.value || 0
            );


        if (
            !Number.isFinite(changeValue) ||
            changeValue <= 0
        ) {

            alert(
                "Informe o valor para o troco."
            );

            changeFor?.focus();

            return;
        }


        if (changeValue < total) {

            alert(
                "O valor para o troco precisa ser maior ou igual ao total do pedido."
            );

            changeFor?.focus();

            return;
        }


        changeText =
            `Troco para: ${formatPrice(changeValue)}`;
    }


    /*
     * Monta os produtos do pedido.
     */
    const orderItems =
        cart
            .map((item, index) => {

                const product =
                    getProduct(
                        item.productId
                    );


                if (!product) {
                    return null;
                }


                const quantity =
                    Math.max(
                        1,
                        Number(item.quantity) || 1
                    );


                const extras =
                    Array.isArray(item.extras)
                        ? item.extras
                        : [];


                const extrasText =
                    extras.length
                        ? extras
                            .map(
                                extra =>
                                    `${extra.name} (${formatPrice(extra.price)})`
                            )
                            .join(", ")
                        : "Sem adicionais";


                const itemTotal =
                    getCartItemUnitPrice(item) *
                    quantity;


                return (
                    `${index + 1}. ` +
                    `${product.name} ` +
                    `x${quantity}\n` +
                    `   Adicionais: ${extrasText}\n` +
                    `   Valor: ${formatPrice(itemTotal)}`
                );

            })
            .filter(Boolean)
            .join("\n\n");


    const orderMessage =

`🍔 *NOVO PEDIDO - PARADA DO LANCHE*

👤 *Cliente:*
${customerName}

📱 *WhatsApp:*
${customerPhone}

📍 *Endereço:*
${address}${number ? `, ${number}` : ""}${complement ? ` - ${complement}` : ""}

📌 *Referência:*
${reference || "Não informado"}

━━━━━━━━━━━━━━━━━━

🛒 *PEDIDO:*

${orderItems}

━━━━━━━━━━━━━━━━━━

💰 *RESUMO:*

Subtotal: ${formatPrice(subtotal)}
Entrega: ${formatPrice(delivery)}
*TOTAL: ${formatPrice(total)}*

💳 *Pagamento:*
${payment}

💵 *Troco:*
${changeText}

📝 *Observação:*
${observation || "Nenhuma"}

━━━━━━━━━━━━━━━━━━

Obrigado! 🍔`;


    const phone =
        String(
            CONFIG.whatsapp
        ).replace(
            /\D/g,
            ""
        );


    if (
        !phone ||
        phone.length < 10
    ) {

        alert(
            "Configure o número do WhatsApp no arquivo script.js."
        );

        return;
    }


    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(
            orderMessage
        );


    /*
     * window.open é executado diretamente
     * dentro do submit, reduzindo o risco
     * de bloqueio pelo navegador.
     */
    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );


    /*
     * Não limpamos o carrinho imediatamente.
     *
     * Isso evita perder o pedido caso
     * o usuário feche o WhatsApp.
     */
}


/* =========================================================
   PROMOÇÃO
========================================================= */

function addPromotion() {

    openProductModal(4);

}


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

function setupBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        },
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
}


/* =========================================================
   EVENTOS
========================================================= */

function setupEvents() {


    /* Abrir carrinho */

    document
        .getElementById(
            "openCart"
        )
        ?.addEventListener(
            "click",
            openCart
        );


    document
        .getElementById(
            "heroCartButton"
        )
        ?.addEventListener(
            "click",
            openCart
        );


    document
        .getElementById(
            "ctaButton"
        )
        ?.addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "cardapio"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );


    /* Fechar carrinho */

    document
        .getElementById(
            "closeCart"
        )
        ?.addEventListener(
            "click",
            closeCart
        );


    /* Fechar produto */

    document
        .getElementById(
            "closeProductModal"
        )
        ?.addEventListener(
            "click",
            closeProductModal
        );


    /* Adicionar produto */

    document
        .getElementById(
            "addToCartButton"
        )
        ?.addEventListener(
            "click",
            addSelectedProductToCart
        );


    /* Quantidade modal */

    document
        .getElementById(
            "modalMinus"
        )
        ?.addEventListener(
            "click",
            () => {

                modalQuantity =
                    Math.max(
                        1,
                        modalQuantity - 1
                    );

                updateModal();

            }
        );


    document
        .getElementById(
            "modalPlus"
        )
        ?.addEventListener(
            "click",
            () => {

                modalQuantity =
                    Math.min(
                        99,
                        modalQuantity + 1
                    );

                updateModal();

            }
        );


    /* Alteração dos adicionais */

    document
        .querySelectorAll(
            "#customizationArea input[type='checkbox']"
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                updateModal
            );

        });


    /* Checkout */

    document
        .getElementById(
            "checkoutButton"
        )
        ?.addEventListener(
            "click",
            openCheckout
        );


    document
        .getElementById(
            "closeCheckout"
        )
        ?.addEventListener(
            "click",
            closeCheckout
        );


    /* Formulário */

    checkoutForm
        ?.addEventListener(
            "submit",
            submitOrder
        );


    /* Troco */

    needChange
        ?.addEventListener(
            "change",
            updateChangeBox
        );


    /* Busca */

    searchInput
        ?.addEventListener(
            "input",
            renderProducts
        );


    /* Categorias */

    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const category =
                        button.dataset.category;

                    selectCategory(
                        category
                    );

                }
            );

        });


    /* Promoção */

    document
        .getElementById(
            "promoButton"
        )
        ?.addEventListener(
            "click",
            addPromotion
        );


    /* Cardápio */

    document
        .getElementById(
            "goMenuButton"
        )
        ?.addEventListener(
            "click",
            () => {

                closeCart();

                document
                    .getElementById(
                        "cardapio"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );


    /* Clique fora do modal */

    productModal
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    productModal
                ) {

                    closeProductModal();

                }

            }
        );


    checkoutOverlay
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    checkoutOverlay
                ) {

                    closeCheckout();

                }

            }
        );


    cartOverlay
        ?.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    cartOverlay
                ) {

                    closeCart();

                }

            }
        );


    /* ESC */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            if (
                productModal &&
                !productModal.classList.contains(
                    "hidden"
                )
            ) {

                closeProductModal();

                return;
            }


            if (
                checkoutOverlay &&
                !checkoutOverlay.classList.contains(
                    "hidden"
                )
            ) {

                closeCheckout();

                return;
            }


            if (
                cartOverlay &&
                !cartOverlay.classList.contains(
                    "hidden"
                )
            ) {

                closeCart();

            }

        }
    );
}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function init() {

    loadCart();

    renderProducts();

    renderPopularProducts();

    renderCart();

    updateCartCount();

    updateCategoryButtons();

    updateChangeBox();

    setupEvents();

    setupBackToTop();

}


document.addEventListener(
    "DOMContentLoaded",
    init
);
```
