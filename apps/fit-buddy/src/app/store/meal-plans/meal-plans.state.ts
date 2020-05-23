import { MealPlan } from '../../models/MealPlan';
import { WeekDay } from '@angular/common';

export interface MealPlansState {
	mealPlans: MealPlan[];
	isLoading: boolean;
}

export const initalState: MealPlansState = {
	mealPlans: [
		{
			id: WeekDay.Monday,
			dayName: "Monday",
			notes: "2Lts de agua pura 1 Lt Cola de caballo",
			meals: [
				{
					name: "Desayuno",
					time: 8,
					items: ["200g pollo sancochado.",
						"1 taza de avena espesa con canela.",
						"6 almendras, 10gr Chía."]
				},
				{
					name: "Medía mañana",
					time: 11,
					items: ["Sandía 150gr."]
				},
				{
					name: "Almuerzo",
					time: 13,
					items:
						["200g pollo.",
							"20g camote.",
							"Ensalada: espinaca, apio, limón y oliva."]
				},
				{
					name: "Medía tarde",
					time: 16,
					items: ["Sandía 150gr."]
				},
				{
					name: "Cena",
					time: 19,
					items: ["100g pollo.", "2 galletas de arroz.", "Ensalada opcional."]
				}
			]
		},
		{
			id: WeekDay.Tuesday,
			dayName: "Tuesday",
			notes: "2Lts de agua pura 1 Lt Cola de caballo",
			meals: [
				{
					name: "Desayuno",
					time: 8,
					items: [
						"Tortilla de 2 claras, 1huevo entero, espinaca y pimienta",
						"Infusión.",
						"6 almendras"]
				},
				{
					name: "Medía mañana",
					time: 11,
					items: ["Sandía 150gr."]
				},
				{
					name: "Almuerzo",
					time: 13,
					items:
						["200g pollo.",
							"20g camote.",
							"Ensalada: espinaca, apio, limón y oliva."]
				},
				{
					name: "Medía tarde",
					time: 16,
					items: ["Sandía 150gr."]
				},
				{
					name: "Cena",
					time: 19,
					items: ["100g pollo.", "2 galletas de arroz.", "Ensalada opcional."]
				}
			]
		},
	],
	isLoading: false
};
