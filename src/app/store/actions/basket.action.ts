import { createAction, props } from "@ngrx/store";
import { Furniture } from "src/app/core/models/furniture.model";



export const getBasket = createAction('[Basket] Get Basket');
export const addedItemInBasket = createAction('[Basket] Added Item In Basket', props<{ furniture: Furniture }>())