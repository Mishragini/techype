"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, MinusCircle } from 'lucide-react';

interface DynamicField {
    label: string;
    value: string;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    dynamicFields: DynamicField[];
}

const DynamicForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        dynamicFields: [
            { label: '', value: '' },
            { label: '', value: '' }
        ]
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleDynamicFieldChange = (index: number, field: keyof DynamicField, value: string) => {
        setFormData(prevData => {
            const updatedFields = [...prevData.dynamicFields];
            updatedFields[index] = { ...updatedFields[index], [field]: value };
            return { ...prevData, dynamicFields: updatedFields };
        });
    };

    const addDynamicField = () => {
        setFormData(prevData => ({
            ...prevData,
            dynamicFields: [...prevData.dynamicFields, { label: '', value: '' }]
        }));
    };

    const removeDynamicField = (index: number) => {
        setFormData(prevData => ({
            ...prevData,
            dynamicFields: prevData.dynamicFields.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader className="bg-black text-white rounded-t-lg">
                    <CardTitle className="text-2xl font-bold">Dynamic Form</CardTitle>
                </CardHeader>
                <CardContent className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-700">Dynamic Fields</h3>
                                <Button
                                    type="button"
                                    onClick={addDynamicField}
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800"
                                >
                                    <PlusCircle size={16} />
                                    <span>Add Field</span>
                                </Button>
                            </div>
                            {formData.dynamicFields.map((field, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
                                    <div className="flex justify-between items-center">
                                        <Label htmlFor={`label-${index}`} className="text-sm font-medium text-gray-700">Label {index + 1}</Label>
                                        {index > 1 && (
                                            <Button
                                                type="button"
                                                onClick={() => removeDynamicField(index)}
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <MinusCircle size={16} />
                                            </Button>
                                        )}
                                    </div>
                                    <Input
                                        id={`label-${index}`}
                                        value={field.label}
                                        onChange={(e) => handleDynamicFieldChange(index, 'label', e.target.value)}
                                        placeholder={`Enter label ${index + 1}`}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                    <Label htmlFor={`value-${index}`} className="text-sm font-medium text-gray-700">Value {index + 1}</Label>
                                    <Input
                                        id={`value-${index}`}
                                        value={field.value}
                                        onChange={(e) => handleDynamicFieldChange(index, 'value', e.target.value)}
                                        placeholder={`Enter value ${index + 1}`}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                            ))}
                        </div>

                        <Button type="submit" className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default DynamicForm;