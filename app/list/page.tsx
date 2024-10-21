import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data
const data = [
    { id: 1, name: "John Doe", number: "123-456-7890", status: "Active" },
    { id: 2, name: "Jane Smith", number: "987-654-3210", status: "Inactive" },
    { id: 3, name: "Bob Johnson", number: "456-789-0123", status: "Pending" },
    { id: 4, name: "Alice Williams", number: "789-012-3456", status: "Active" },
    { id: 5, name: "Charlie Brown", number: "321-654-0987", status: "Inactive" },
];

const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'active':
            return 'bg-green-100 text-green-800 hover:bg-green-200';
        case 'inactive':
            return 'bg-red-100 text-red-800 hover:bg-red-200';
        case 'pending':
            return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
        default:
            return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
};

const ModernListComponent = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen flex justify-center items-center">
            <Card className="w-full max-w-4xl mx-auto shadow-lg">
                <CardHeader className="bg-black">
                    <CardTitle className="text-3xl font-bold text-white">User List</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-lg font-semibold text-gray-700">Name</TableHead>
                                <TableHead className="text-lg font-semibold text-gray-700">Number</TableHead>
                                <TableHead className="text-lg font-semibold text-gray-700">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id} className="hover:bg-gray-100 transition-colors duration-200">
                                    <TableCell className="font-medium text-gray-900">{item.name}</TableCell>
                                    <TableCell className="text-gray-700">{item.number}</TableCell>
                                    <TableCell>
                                        <Badge className={`${getStatusColor(item.status)} px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200`}>
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default ModernListComponent;