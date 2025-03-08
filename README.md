# Pig Game React

Un juego de dados implementado en React donde dos jugadores compiten por llegar a 100 puntos. Este proyecto fue creado usando Vite y React.

## 🎮 Reglas del Juego

1. Cada jugador tiene un turno en el que puede lanzar el dado tantas veces como quiera
2. Los puntos de cada lanzamiento se suman a la puntuación temporal del turno
3. Si sale un 1, el jugador pierde todos los puntos temporales y pasa el turno
4. El jugador puede elegir "Hold" para guardar sus puntos temporales y pasar el turno
5. Si un jugador supera los 100 puntos al hacer "Hold", pierde el turno y los puntos temporales
6. El primer jugador en llegar exactamente a 100 puntos gana

## 🚀 Enlace al Juego en Funcionamiento

[Jugar al Pig Game](aquí_irá_el_enlace_cuando_se_despliegue)

## 🛠️ Tecnologías Utilizadas

- React 18
- Vite
- CSS Moderno
- JavaScript ES6+

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Entrar al directorio
cd JS_Pig_Game_React

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎯 Características

- Interfaz de usuario moderna y responsive
- Animaciones suaves
- Gestión de estado con React Hooks
- Validación de nombres de jugadores
- Diseño minimalista y elegante

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre primero un issue para discutir qué te gustaría cambiar.

## 📝 Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Iniciar proyecto
- npm create vite@latest pig-game-react
- cd pig-game-react
- npm install
- npm run dev
- npm run build
-npm run deploy



## Crear el package.json


## Informacion 

// 1. definir variables de estado usando useState (activePlayer, score, current, diceNumber)
// 2. definir funciones para manejar los eventos de click (handleNewGame, handleRollDice, handleHold)
// 3. pasar las variables de estado y las funciones a los componentes Player y Dice
// 4. manejar los eventos de click en los botones de New game, Roll dice y Hold
// 5. manejar el cambio de imagen de dado cuando se hace click en el botón rolldice
// 5. manejar el cambio de jugador activo cuando se hace click en el botón Hold
// 6. manejar el cambio de jugador activo cuando se obtiene un 1 al hacer click en el botón Roll dice
// 7. manejar el cambio de jugador activo cuando se obtiene un 6 al hacer click en el botón Roll dice
// 8. manejar el cambio de jugador activo cuando se obtiene un número diferente de 1 o 6 al hacer click en el botón Roll dice
// 9. manejar el cambio de jugador activo cuando se hace click en el botón New game
