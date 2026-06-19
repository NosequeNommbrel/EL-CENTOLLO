    const recipes = [
      {
        title: "Falsa mousse centollo en cucharitas",
        source: "1 Cooksnap",
        ingredients: "huevos cocidos · palitos de cangrejo · mejillones al natural escurridos · berberechos al natural escurridos · mayonesa · nata para cocinar · sal · cucharitas comestibles",
        author: "Berta Álvarez",
        authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80",
        time: "",
        servings: "",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&h=360&q=80"
      },
      {
        title: "Crema de centolla con crujiente de pan",
        source: "",
        ingredients: "Centollas cocidas · Cebollas medianas · Leche entera con calcio · Maicena · Sal · Pimienta negra · Nuez moscada · Aceite de oliva virgen extra · Pan rallado (previamente tostado ...)",
        author: "Arianne",
        authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=60&h=60&q=80",
        time: "50 minutos (+ tiempo de extraer la carne)",
        servings: "8-10 Comensales",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&h=360&q=80"
      },
      {
        title: "Palta rellena con salpicón de centolla",
        source: "",
        ingredients: "carne de centolla cocida · cebolla morada cortada en cuadritos · pimiento morrón cortado en cuadritos · apio cortado en cuadritos · cilantro picado · mayonesa · mostaza a la piedra ...",
        author: "Jon Michelena",
        authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&h=60&q=80",
        time: "30 minutos",
        servings: "2 raciones",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&h=360&q=80"
      }
    ];

    const recipeList = document.getElementById('recipeList');

    const bookmarkSvg = `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v16.2a.3.3 0 0 1-.49.23L12 16.6l-5.51 4.33a.3.3 0 0 1-.49-.23V4.5Z" stroke="currentColor" />
      </svg>`;

    const clockSvg = `
      <svg class="clock-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      </svg>`;

    const chefSvg = `
      <svg class="chef-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 10.5c-1.7 0-3-1.3-3-3s1.3-3 3-3c.3 0 .6 0 .9.1C9.4 3.9 10.6 3 12 3s2.6.9 3.1 2.1c.3-.1.6-.1.9-.1 1.7 0 3 1.3 3 3s-1.3 3-3 3H8Z" fill="currentColor"/>
        <path d="M7 11.5h10l-.8 7.2c-.1.8-.8 1.3-1.5 1.3H9.3c-.8 0-1.4-.6-1.5-1.3L7 11.5Z" fill="currentColor"/>
      </svg>`;

    function card(recipe) {
      return `
        <article class="recipe-card">
          <img class="thumb" src="${recipe.image}" alt="${recipe.title}">
          <div class="content">
            <h2 class="title">${recipe.title}</h2>
            ${recipe.source ? `<div class="author-row"><span class="source">${recipe.source}</span></div>` : ''}
            <p class="ingredients">${recipe.ingredients}</p>
            <div class="meta">
              ${recipe.time ? `<span>${clockSvg}${recipe.time}</span>` : ''}
              ${recipe.servings ? `<span><span class="chef-icon">${chefSvg}</span>${recipe.servings}</span>` : ''}
              <span class="author-row" style="margin:0; gap:6px;">
                <img class="author-avatar" src="${recipe.authorImg}" alt="${recipe.author}">
                <span>${recipe.author}</span>
              </span>
            </div>
          </div>
          <div class="bookmark">${bookmarkSvg}</div>
        </article>
      `;
    }

    recipeList.innerHTML = recipes.map(card).join('');