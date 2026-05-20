import Footer from '@/components/ui/Footer'
import TaskList from '@/components/ui/TaskList'
import TaskListPagination from '@/components/ui/TaskListPagination'
import DateTimeFilter from '@/components/ui/DateTimeFilter'
import StatsAndFilters from '@/components/ui/StatsAndFilters'
import AddTask from '@/components/ui/AddTask'
import Header from '@/components/ui/Header'
import React from 'react'

const HomePage = () => {
    return (
        <div className="container pt-8 mx-auto">
            <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
                {/*Header*/}
                <Header />
                {/* Tao Nhiem Vu */}
                <AddTask />
                {/* Thong ke va bo loc */}
                <StatsAndFilters />
                {/* Danh sach */}
                <TaskList />
                {/* Phan trang va loc theo ngay */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <TaskListPagination />
                    <DateTimeFilter />
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default HomePage