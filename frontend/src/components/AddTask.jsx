import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import api from '@/lib/axios';

const AddTask = ({ handleTaskAdded }) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const addTask = async () => {
        if (newTaskTitle.trim()) {
           try {
            await api.post("/tasks", { title: newTaskTitle });
            toast.success("Them task thanh cong");
            handleTaskAdded(); // Gọi hàm handleTaskAdded sau khi thêm task thành công
           } catch (error) {
                console.error("Loi them task: ", error);
                toast.error("Loi xay ra khi them task");
           }
           setNewTaskTitle(''); // Xóa giá trị trong ô input sau khi thêm task
        } else{
            toast.error("Vui long nhap tieu de task");
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };
    return (
        <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                    type="text"
                    placeholder="Can phai lam gi"
                    className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/50"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                    ></Input>
                <Button
                    variant="gradient"
                    size="xl"
                    className="px-6"
                    onClick={addTask}
                    disabled={!newTaskTitle.trim()}
                    ><Plus className="size-5"></Plus>Them</Button>
            </div>
        </Card>
    );
};

export default AddTask;
