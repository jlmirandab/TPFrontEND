export interface cocktailModel {
   idDrink: string; // ID único del cóctel en la base de datos (ej: "11007")
  strDrink: string; // Nombre del cóctel (ej: "Margarita")
  strDrinkThumb: string;  // URL de la imagen del cóctel 
  strCategory: string; // Categoría del cóctel (ej: "Ordinary Drink", "Cocktail")
  strAlcoholic: string; // Indica si es alcohólico o no 
  strGlass: string;  // Tipo de vaso recomendado para servirlo 
  strInstructions: string; // Instrucciones para preparar el cóctel 
  ingredients: string[]; // Lista de ingredientes usados en el cóctel (ej: ["Tequila","Limon", "Sal"])
}
