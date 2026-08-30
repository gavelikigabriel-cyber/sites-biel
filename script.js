/* ==========================================
   PARADA DO LANCHE
   SCRIPT.JS
========================================== */


/* ==========================================
   CONFIGURAÇÕES
========================================== */

/*
    IMPORTANTE:
    Troque pelo número do WhatsApp da lanchonete.

    Formato:
    código do país + DDD + número

    Exemplo:
    5541987133381

    Não utilize:
    +55
    espaços
    parênteses
    hífens
*/
const WHATSAPP_NUMBER = "5541987133381";


/*
    Taxa padrão de entrega.
    Você pode alterar este valor facilmente.
*/
const DELIVERY_FEE = 5.00;


/* ==========================================
   CATEGORIAS
========================================== */

const categories = [
    {
        id: "hamburgueres",
        name: "Hambúrgueres",
        icon: "🍔"
    },
    {
        id: "x-saladas",
        name: "X-Saladas",
        icon: "🥪"
    },
    {
        id: "cachorros-quentes",
        name: "Cachorros-quentes",
        icon: "🌭"
    },
    {
        id: "porcoes",
        name: "Porções",
        icon: "🍟"
    },
    {
        id: "combos",
        name: "Combos",
        icon: "🍱"
    },
    {
        id: "bebidas",
        name: "Bebidas",
        icon: "🥤"
    },
    {
        id: "sobremesas",
        name: "Sobremesas",
        icon: "🍰"
    }
];


/* ==========================================
   PRODUTOS
========================================== */

const products = [

    {
        id: 1,
        name: "Parada Bacon",
        category: "hamburgueres",
        description:
            "Pão brioche, hambúrguer artesanal, queijo cheddar, bacon crocante e molho especial.",
        price: 27.90,
        oldPrice: null,
        badge: "Mais pedido",
        hot: true,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 2,
        name: "X-Salada Especial",
        category: "x-saladas",
        description:
            "Pão, hambúrguer, queijo, presunto, alface, tomate, milho e molho especial.",
        price: 22.90,
        oldPrice: 25.90,
        badge: "Promoção",
        hot: false,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 3,
        name: "X-Bacon",
        category: "x-saladas",
        description:
            "Hambúrguer artesanal, queijo, bacon crocante, alface, tomate e maionese da casa.",
        price: 25.90,
        oldPrice: null,
        badge: "",
        hot: false,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 4,
        name: "Duplo Cheddar",
        category: "hamburgueres",
        description:
            "Dois hambúrgueres artesanais, cheddar cremoso, cebola caramelizada e molho especial.",
        price: 31.90,
        oldPrice: null,
        badge: "Novo",
        hot: false,
        popular: false,
        image:
            "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 5,
        name: "Dogão Completo",
        category: "cachorros-quentes",
        description:
            "Pão macio, salsicha, molho, milho, ervilha, batata palha, queijo e maionese.",
        price: 18.90,
        oldPrice: null,
        badge: "Mais pedido",
        hot: true,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 6,
        name: "Batata Frita P",
        category: "porcoes",
        description:
            "Batatas crocantes por fora e macias por dentro, servidas com molho especial.",
        price: 14.90,
        oldPrice: null,
        badge: "",
        hot: false,
        popular: false,
        image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        name: "Batata com Cheddar e Bacon",
        category: "porcoes",
        description:
            "Batata frita crocante coberta com cheddar cremoso e bacon crocante.",
        price: 24.90,
        oldPrice: 27.90,
        badge: "Promoção",
        hot: true,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 8,
        name: "Combo Clássico",
        category: "combos",
        description:
            "X-Salada + batata frita P + refrigerante lata.",
        price: 29.90,
        oldPrice: 34.90,
        badge: "Oferta",
        hot: true,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 9,
        name: "Coca-Cola Lata",
        category: "bebidas",
        description:
            "Refrigerante Coca-Cola lata 350 ml, bem gelado.",
        price: 6.00,
        oldPrice: null,
        badge: "",
        hot: false,
        popular: false,
        image:
            "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 10,
        name: "Milkshake de Chocolate",
        category: "sobremesas",
        description:
            "Milkshake cremoso de chocolate com cobertura especial.",
        price: 16.90,
        oldPrice: null,
        badge: "Delícia",
        hot: false,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 11,
        name: "Combo Parada Especial",
        category: "combos",
        description:
            "Hambúrguer artesanal + batata frita + refrigerante lata.",
        price: 29.90,
        oldPrice: 34.90,
        badge: "Oferta especial",
        hot: true,
        popular: true,
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 12,
        name: "Brownie com Sorvete",
        category: "sobremesas",
        description:
            "Brownie de chocolate servido com uma bola de sorvete e calda.",
        price: 18.90,
        oldPrice: null,
        badge: "",
        hot: false,
        popular: false,
        image:
            "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85"
    }
];


/* ==========================================
   ESTADO DA APLICAÇÃO
========================================== */

let cart = loadCart();

let selectedCategory = "todos";

let modalProduct = null;

let modalQuantity = 1;


/* ==========================================
   ELEMENTOS
========================================== */

const productsGrid =
    document.getElementById("productsGrid");

const popularGrid =
    document.getElementById("popularGrid");

const categoryList =
    document.getElementById("categoryList");

const categoryTabs =
    document.getElementById("categoryTabs");

const searchInput =
    document.getElementById("searchInput");

const emptyState =
    document.getElementById("emptyState");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartFooter =
    document.getElementById("cartFooter");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartDelivery =
    document.getElementById("cartDelivery");

const cartTotal =
    document.getElementById("cartTotal");

const productModal =
    document.getElementById("productModal");

const cartOverlay =
    document.getElementById("cartOverlay");

const checkoutModal =
    document.getElementById("checkoutModal");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* ==========================================
   INICIALIZAÇÃO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderCategories();

    renderCategoryTabs();

    renderProducts();

    renderPopularProducts();

    updateCart();

    setupPaymentEvents();

    setupGlobalEvents();

    setupWhatsAppButtons();

    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

});


/* ==========================================
   CATEGORIAS
========================================== */

function renderCategories() {

    categoryList.innerHTML = categories.map(category => {

        return `
            <button
                class="category-card ${selectedCategory === category.id ? "active" : ""}"
                onclick="filterByCategory('${category.id}')"
            >
                <span class="category-icon">
                    ${category.icon}
                </span>

                <strong>
                    ${category.name}
                </strong>
            </button>
        `;

    }).join("");

}


function renderCategoryTabs() {

    const allButton = `
        <button
            class="category-tab ${selectedCategory === "todos" ? "active" : ""}"
            onclick="filterByCategory('todos')"
        >
            Todos
        </button>
    `;

    const categoryButtons = categories.map(category => {

        return `
            <button
                class="category-tab ${selectedCategory === category.id ? "active" : ""}"
                onclick="filterByCategory('${category.id}')"
            >
                ${category.icon} ${category.name}
            </button>
        `;

    }).join("");

    categoryTabs.innerHTML =
        allButton + categoryButtons;
}


function filterByCategory(categoryId) {

    selectedCategory = categoryId;

    renderCategories();

    renderCategoryTabs();

    renderProducts();

    document.getElementById("cardapio").scrollIntoView({
        behavior: "smooth"
    });
}


/* ==========================================
   PRODUTOS
========================================== */

function renderProducts() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();

    let filteredProducts = products.filter(product => {

        const matchesCategory =
            selectedCategory === "todos" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(searchTerm) ||
            product.description
                .toLowerCase()
                .includes(searchTerm);

        return matchesCategory && matchesSearch;
    });


    if (filteredProducts.length === 0) {

        productsGrid.innerHTML = "";

        emptyState.classList.remove("hidden");

        return;
    }


    emptyState.classList.add("hidden");


    productsGrid.innerHTML =
        filteredProducts.map(createProductCard).join("");
}


function createProductCard(product) {

    const category =
        categories.find(
            category => category.id === product.category
        );


    const badge = product.badge
        ? `
            <span class="product-badge ${product.hot ? "hot" : ""}">
                ${product.badge}
            </span>
        `
        : "";


    const oldPrice = product.oldPrice
        ? `<small>${formatCurrency(product.oldPrice)}</small>`
        : "";


    return `
        <article
            class="product-card"
            onclick="openProductModal(${product.id})"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                ${badge}

            </div>


            <div class="product-content">

                <span class="product-category">
                    ${category ? category.name : ""}
                </span>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <div class="product-price">
                        ${oldPrice}
                        <strong>
                            ${formatCurrency(product.price)}
                        </strong>
                    </div>


                    <button
                        class="add-button"
                        onclick="event.stopPropagation(); openProductModal(${product.id})"
                        aria-label="Adicionar ${product.name}"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* ==========================================
   MAIS PEDIDOS
========================================== */

function renderPopularProducts() {

    const popularProducts =
        products
            .filter(product => product.popular)
            .slice(0, 4);


    popularGrid.innerHTML =
        popularProducts.map(product => {

            return `
                <article
                    class="popular-card"
                    onclick="openProductModal(${product.id})"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <div class="popular-card-content">

                        <h3>${product.name}</h3>

                        <div class="popular-card-bottom">
                            <strong>
                                ${formatCurrency(product.price)}
                            </strong>

                            <span>→</span>
                        </div>

                    </div>

                </article>
            `;

        }).join("");
}


/* ==========================================
   MODAL DO PRODUTO
========================================== */

function openProductModal(productId) {

    const product =
        products.find(item => item.id === productId);

    if (!product) return;

    modalProduct = product;

    modalQuantity = 1;

    document.getElementById("modalProductImage").src =
        product.image;

    document.getElementById("modalProductImage").alt =
        product.name;

    const category =
        categories.find(
            item => item.id === product.category
        );

    document.getElementById("modalProductCategory").textContent =
        category ? category.name : "";

    document.getElementById("modalProductName").textContent =
        product.name;

    document.getElementById("modalProductDescription").textContent =
        product.description;

    document.getElementById("modalProductPrice").textContent =
        formatCurrency(product.price);

    document.getElementById("modalQuantity").textContent =
        modalQuantity;


    document
        .querySelectorAll(".customization input")
        .forEach(input => {
            input.checked = false;
        });


    updateModalTotal();

    productModal.classList.remove("hidden");

    document.body.classList.add("modal-open");
}


function closeProductModal() {

    productModal.classList.add("hidden");

    if (
        cartOverlay.classList.contains("hidden") &&
        checkoutModal.classList.contains("hidden")
    ) {
        document.body.classList.remove("modal-open");
    }
}


function changeModalQuantity(amount) {

    modalQuantity += amount;

    if (modalQuantity < 1) {
        modalQuantity = 1;
    }

    if (modalQuantity > 20) {
        modalQuantity = 20;
    }

    document.getElementById("modalQuantity").textContent =
        modalQuantity;

    updateModalTotal();
}


function getCustomizationTotal() {

    let customizationTotal = 0;

    document
        .querySelectorAll(".customization input:checked")
        .forEach(input => {

            customizationTotal +=
                Number(input.dataset.price) || 0;

        });

    return customizationTotal;
}


function getSelectedCustomizations() {

    return Array.from(
        document.querySelectorAll(
            ".customization input:checked"
        )
    ).map(input => ({
        name: input.value,
        price: Number(input.dataset.price) || 0
    }));
}


function updateModalTotal() {

    if (!modalProduct) return;

    const customizationTotal =
        getCustomizationTotal();

    const unitPrice =
        modalProduct.price + customizationTotal;

    const total =
        unitPrice * modalQuantity;

    document.getElementById("modalTotal").textContent =
        formatCurrency(total);
}


document
    .querySelectorAll(".customization input")
    .forEach(input => {

        input.addEventListener("change", updateModalTotal);

    });


document
    .getElementById("addModalProductButton")
    .addEventListener("click", () => {

        if (!modalProduct) return;

        const customizations =
            getSelectedCustomizations();

        const customizationTotal =
            customizations.reduce(
                (sum, item) => sum + item.price,
                0
            );


        const unitPrice =
            modalProduct.price + customizationTotal;


        const customizationKey =
            customizations
                .map(item => item.name)
                .sort()
                .join("|");


        /*
            Usamos uma chave baseada no produto + personalizações.
            Assim, o mesmo lanche com personalizações diferentes
            fica separado no carrinho.
        */
        const cartKey =
            `${modalProduct.id}_${customizationKey}`;


        const existingItem =
            cart.find(item => item.key === cartKey);


        if (existingItem) {

            existingItem.quantity += modalQuantity;

        } else {

            cart.push({
                key: cartKey,

                productId: modalProduct.id,

                name: modalProduct.name,

                image: modalProduct.image,

                quantity: modalQuantity,

                unitPrice,

                basePrice: modalProduct.price,

                customizations

            });

        }


        saveCart();

        updateCart();

        closeProductModal();

        showToast(
            `${modalQuantity}x ${modalProduct.name}`
        );

    });


/* ==========================================
   CARRINHO
========================================== */

function updateCart() {

    renderCartItems();

    updateCartSummary();

    updateCartCount();

    saveCart();
}


function updateCartCount() {

    const quantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    cartCount.textContent = quantity;
}


function renderCartItems() {

    if (cart.length === 0) {

        cartItems.innerHTML = "";

        cartEmpty.classList.remove("hidden");

        cartFooter.classList.add("hidden");

        return;
    }


    cartEmpty.classList.add("hidden");

    cartFooter.classList.remove("hidden");


    cartItems.innerHTML =
        cart.map((item, index) => {

            const customizationText =
                item.customizations &&
                item.customizations.length
                    ? item.customizations
                        .map(custom => custom.name)
                        .join(", ")
                    : "Sem adicionais";


            return `
                <div class="cart-item">

                    <div class="cart-item-image">
                        <img
                            src="${item.image}"
                            alt="${item.name}"
                        >
                    </div>


                    <div class="cart-item-info">

                        <h4>${item.name}</h4>

                        <small>
                            ${customizationText}
                        </small>

                        <div class="cart-item-price">
                            ${formatCurrency(item.unitPrice)}
                        </div>


                        <div class="cart-item-actions">

                            <div class="mini-quantity">

                                <button
                                    onclick="changeCartQuantity(${index}, -1)"
                                    aria-label="Diminuir quantidade"
                                >
                                    −
                                </button>

                                <strong>
                                    ${item.quantity}
                                </strong>

                                <button
                                    onclick="changeCartQuantity(${index}, 1)"
                                    aria-label="Aumentar quantidade"
                                >
                                    +
                                </button>

                            </div>


                            <button
                                class="remove-item"
                                onclick="removeCartItem(${index})"
                            >
                                Remover
                            </button>

                        </div>

                    </div>

                </div>
            `;

        }).join("");
}


function changeCartQuantity(index, amount) {

    if (!cart[index]) return;

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();
}


function removeCartItem(index) {

    if (!cart[index]) return;

    const productName =
        cart[index].name;

    cart.splice(index, 1);

    updateCart();

    showToast(
        `${productName} removido do carrinho.`
    );
}


function calculateSubtotal() {

    return cart.reduce(
        (total, item) =>
            total +
            item.unitPrice * item.quantity,
        0
    );
}


function calculateTotal() {

    const subtotal =
        calculateSubtotal();

    if (subtotal <= 0) {
        return 0;
    }

    return subtotal + DELIVERY_FEE;
}


function updateCartSummary() {

    const subtotal =
        calculateSubtotal();

    const total =
        calculateTotal();


    cartSubtotal.textContent =
        formatCurrency(subtotal);

    cartDelivery.textContent =
        subtotal > 0
            ? formatCurrency(DELIVERY_FEE)
            : formatCurrency(0);

    cartTotal.textContent =
        formatCurrency(total);
}


function openCart() {

    cartOverlay.classList.remove("hidden");

    document.body.classList.add("modal-open");

}


function closeCart() {

    cartOverlay.classList.add("hidden");

    if (checkoutModal.classList.contains("hidden")) {
        document.body.classList.remove("modal-open");
    }
}


/* ==========================================
   CHECKOUT
========================================== */

function openCheckout() {

    if (cart.length === 0) {

        showToast("Adicione produtos ao carrinho primeiro.");

        return;
    }


    closeCart();

    updateCheckoutTotal();

    checkoutModal.classList.remove("hidden");

    document.body.classList.add("modal-open");
}


function closeCheckout() {

    checkoutModal.classList.add("hidden");

    document.body.classList.remove("modal-open");
}


function updateCheckoutTotal() {

    document.getElementById("checkoutTotal").textContent =
        formatCurrency(calculateTotal());
}


/* ==========================================
   PAGAMENTO
========================================== */

function setupPaymentEvents() {

    const paymentInputs =
        document.querySelectorAll(
            'input[name="payment"]'
        );

    const changeBox =
        document.getElementById("changeBox");

    const changeValueGroup =
        document.getElementById("changeValueGroup");

    const needChange =
        document.getElementById("needChange");


    paymentInputs.forEach(input => {

        input.addEventListener("change", () => {

            const isMoney =
                input.value === "Dinheiro" &&
                input.checked;


            if (isMoney) {

                changeBox.classList.remove("hidden");

            } else {

                changeBox.classList.add("hidden");

                changeValueGroup.classList.add("hidden");

                needChange.checked = false;

            }

        });

    });


    needChange.addEventListener("change", () => {

        if (needChange.checked) {

            changeValueGroup.classList.remove("hidden");

        } else {

            changeValueGroup.classList.add("hidden");

        }

    });

}


/* ==========================================
   FINALIZAÇÃO / WHATSAPP
========================================== */

document
    .getElementById("checkoutForm")
    .addEventListener("submit", event => {

        event.preventDefault();


        if (cart.length === 0) {

            showToast("Seu carrinho está vazio.");

            return;
        }


        const form =
            event.currentTarget;


        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const number =
            document.getElementById("number").value.trim();

        const neighborhood =
            document.getElementById("neighborhood").value.trim();

        const reference =
            document.getElementById("reference").value.trim();

        const payment =
            document.querySelector(
                'input[name="payment"]:checked'
            )?.value || "";

        const note =
            document.getElementById("orderNote").value.trim();

        const needChange =
            document.getElementById("needChange").checked;

        const changeValue =
            document.getElementById("changeValue").value;


        if (!name || !phone || !address ||
            !number || !neighborhood || !payment) {

            showToast(
                "Preencha todos os campos obrigatórios."
            );

            return;
        }


        if (
            payment === "Dinheiro" &&
            needChange &&
            (!changeValue || Number(changeValue) <= 0)
        ) {

            showToast(
                "Informe o valor para o troco."
            );

            return;
        }


        const message =
            createWhatsAppMessage({
                name,
                phone,
                address,
                number,
                neighborhood,
                reference,
                payment,
                needChange,
                changeValue,
                note
            });


        const whatsappUrl =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        /*
            Abre o WhatsApp.
            No celular, normalmente abrirá o aplicativo.
            No computador, poderá abrir o WhatsApp Web.
        */
        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );


        /*
            Limpamos o carrinho somente depois
            de gerar o pedido.
        */
        cart = [];

        saveCart();

        updateCart();

        closeCheckout();

        form.reset();

        document
            .getElementById("changeBox")
            .classList.add("hidden");

        document
            .getElementById("changeValueGroup")
            .classList.add("hidden");

    });


function createWhatsAppMessage(customer) {

    const subtotal =
        calculateSubtotal();

    const total =
        calculateTotal();


    let message =
        `🍔 *NOVO PEDIDO - PARADA DO LANCHE*\n`;

    message +=
        `━━━━━━━━━━━━━━━━━━━━\n\n`;


    message +=
        `👤 *CLIENTE*\n`;

    message +=
        `Nome: ${customer.name}\n`;

    message +=
        `Telefone: ${customer.phone}\n\n`;


    message +=
        `📍 *ENDEREÇO DE ENTREGA*\n`;

    message +=
        `${customer.address}, ${customer.number}\n`;

    message +=
        `Bairro: ${customer.neighborhood}\n`;


    if (customer.reference) {

        message +=
            `Referência: ${customer.reference}\n`;

    }


    message += `\n`;


    message +=
        `🛒 *ITENS DO PEDIDO*\n`;

    message +=
        `━━━━━━━━━━━━━━━━━━━━\n`;


    cart.forEach(item => {

        message +=
            `\n*${item.quantity}x ${item.name}*\n`;

        message +=
            `Valor unitário: ${formatCurrency(item.unitPrice)}\n`;

        message +=
            `Subtotal: ${formatCurrency(
                item.unitPrice * item.quantity
            )}\n`;


        if (
            item.customizations &&
            item.customizations.length
        ) {

            message +=
                `Adicionais: ${item.customizations
                    .map(custom => custom.name)
                    .join(", ")}\n`;

        }

    });


    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;

    message +=
        `Subtotal: ${formatCurrency(subtotal)}\n`;

    message +=
        `Taxa de entrega: ${formatCurrency(DELIVERY_FEE)}\n`;

    message +=
        `💰 *TOTAL: ${formatCurrency(total)}*\n\n`;


    message +=
        `💳 *PAGAMENTO*\n`;

    message +=
        `${customer.payment}\n`;


    if (
        customer.payment === "Dinheiro" &&
        customer.needChange
    ) {

        message +=
            `Troco para: ${formatCurrency(
                Number(customer.changeValue)
            )}\n`;

        const change =
            Number(customer.changeValue) - total;

        if (change >= 0) {

            message +=
                `Troco estimado: ${formatCurrency(change)}\n`;

        }

    }


    if (customer.note) {

        message += `\n📝 *OBSERVAÇÃO*\n`;

        message += `${customer.note}\n`;

    }


    message +=
        `\nObrigado por pedir na *Parada do Lanche*! 🍔❤️`;


    return message;
}


/* ==========================================
   LOCAL STORAGE
========================================== */

function saveCart() {

    localStorage.setItem(
        "paradaDoLancheCart",
        JSON.stringify(cart)
    );

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                "paradaDoLancheCart"
            );


        if (!saved) {
            return [];
        }


        const parsed =
            JSON.parse(saved);


        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Erro ao carregar carrinho:",
            error
        );

        return [];

    }

}


/* ==========================================
   PESQUISA
========================================== */

searchInput.addEventListener(
    "input",
    renderProducts
);


/* ==========================================
   EVENTOS GERAIS
========================================== */

function setupGlobalEvents() {

    document
        .getElementById("openCartButton")
        .addEventListener(
            "click",
            openCart
        );


    /*
        Fecha modais clicando no fundo.
    */

    productModal.addEventListener(
        "click",
        event => {

            if (event.target === productModal) {
                closeProductModal();
            }

        }
    );


    checkoutModal.addEventListener(
        "click",
        event => {

            if (event.target === checkoutModal) {
                closeCheckout();
            }

        }
    );


    cartOverlay.addEventListener(
        "click",
        event => {

            if (event.target === cartOverlay) {
                closeCart();
            }

        }
    );


    /*
        ESC fecha janelas abertas.
    */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            if (!productModal.classList.contains("hidden")) {
                closeProductModal();
            }


            if (!cartOverlay.classList.contains("hidden")) {
                closeCart();
            }


            if (!checkoutModal.classList.contains("hidden")) {
                closeCheckout();
            }

        }
    );


    /*
        Botão voltar ao topo.
    */

    const backToTop =
        document.getElementById("backToTop");


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ==========================================
   WHATSAPP
========================================== */

function setupWhatsAppButtons() {

    const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}`;


    document
        .getElementById("floatingWhatsapp")
        .href = whatsappUrl;


    document
        .getElementById("footerWhatsapp")
        .href = whatsappUrl;


    document
        .getElementById("footerWhatsapp")
        .target = "_blank";


    document
        .getElementById("floatingWhatsapp")
        .target = "_blank";

}


/* ==========================================
   TOPO / NAVEGAÇÃO
========================================== */

function scrollToMenu() {

    document
        .getElementById("cardapio")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================
   TOAST
========================================== */

let toastTimeout;


function showToast(message) {

    toastMessage.textContent =
        message;

    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2800);
}


/* ==========================================
   FORMATAÇÃO
========================================== */

function formatCurrency(value) {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(value);

}


/* ==========================================
   FINAL
========================================== */