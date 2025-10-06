'use client'

import { useAuthStore } from '@/store/auth.store';
import { useIngredientStore } from '@/store/ingredient.store';
import { Table, TableBody, TableRow, TableCell, TableColumn, TableHeader, Button } from '@heroui/react';
import {CATEGORY_OPTIONS, UNIT_OPTIONS} from '@/constants/select-options';

const IngredientsTable = () => {
    const { ingredients, removeIngredient, isLoading } = useIngredientStore();
    const { isAuth } = useAuthStore();

    const handleDelete = async (id:string) => {
        await removeIngredient(id);
    }

    const getCategoryLabel = (value: string) => {
        const option = CATEGORY_OPTIONS.find((option) => option.value === value);
        return option ? option.label : value;
    }

    const getUnitLabel = (value: string) => {
        const option = UNIT_OPTIONS.find((option) => option.value === value);
        return option ? option.label : value;
    }

    if (!isAuth) {
        return <p>Not Authorized</p>
    }

    return !isLoading && isAuth ? (
        <Table
            aria-label="Ingredient list"
            classNames={{
                wrapper: 'mt-4',
                table: 'w-full',
                th: 'text-black',
                td: 'text-black',
            }}
        >
            <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Category</TableColumn>
                <TableColumn>Unit</TableColumn>
                <TableColumn>Price per unit</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
                {ingredients.map(ingredient => (
                    <TableRow key={ingredient.id}>
                        <TableCell>{ingredient.name}</TableCell>
                        <TableCell>{getCategoryLabel(ingredient.category)}</TableCell>
                        <TableCell>{getUnitLabel(ingredient.unit)}</TableCell>
                        <TableCell>
                            {ingredient.pricePerUnit !== null ? `$${ingredient.pricePerUnit}` : '-'}
                        </TableCell>
                        <TableCell>{ingredient.description || '-'}</TableCell>
                        <TableCell><Button
                            color='danger'
                            size="sm"
                            onPress={()=> handleDelete(ingredient.id)}
                        >
                            Delete
                        </Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ) : (
        <p className="mt-4">Loading...</p>
    )
};

export default IngredientsTable;
