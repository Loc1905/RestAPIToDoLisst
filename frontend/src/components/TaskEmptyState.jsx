import React from 'react';
import { Card } from './ui/card';
import { Circle } from 'lucide-react';

const TaskEmptyState = ({ filter }) => {
    return (
        <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
            <div className="space-y-3">
                <Circle className="size-12 mx-auto text-muted-foreground">
                    <div>
                        <h3 className="font-medium text-foreground">
                            {
                                filter === "active" ? "Khong co nv nao dang lam" :
                                    filter === "completed" ? "chua co nv nao hoan thanh" :
                                        "Chua co nv "
                            }
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {filter === "all" ? "Them nv de bat dau" :
                                `chuyen sang filter tat ca de xem nv ${filter === "active" ? 'da hoan thanh' : 'dang lam'}`}
                        </p>
                    </div>
                </Circle>
            </div>
        </Card>
    );
};

export default TaskEmptyState;

