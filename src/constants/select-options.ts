export const CATEGORY_OPTIONS = [
    { value: 'VEGETABLES', label: 'Vegetables' },
    { value: 'FRUITS', label: 'Fruits' },
    { value: 'MEAT', label: 'Meat' },
    { value: 'DAIRY', label: 'Diry' },
    { value: 'SPICES', label: 'Spices' },
    { value: 'OTHER', label: 'Others' },
] as const;

export const UNIT_OPTIONS = [
    { value: 'GRAMS', label: 'Grams' },
    { value: 'KILOGRAMS', label: 'Kilograms' },
    { value: 'LITERS', label: 'Liters' },
    { value: 'MILLILITERS', label: 'Milliliters' },
    { value: 'PIECES', label: 'Pieces' },
] as const;

export const UNIT_ABBREVIATIONS = [
    { value: "GRAMS", label: "г" },
    { value: "KILOGRAMS", label: "кг" },
    { value: "LITERS", label: "л" },
    { value: "MILLILITERS", label: "мл" },
    { value: "PIECES", label: "шт" }
] as const;