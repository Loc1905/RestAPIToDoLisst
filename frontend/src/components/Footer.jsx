import React from 'react';

const Footer = ({completedTasksCount = 0, activeTasksCount = 0}) => {
    return <>
        {completedTasksCount + activeTasksCount > 0 && (
            <div className="text-center">
                <p className="text-sm text-muted-foreground">
                    {
                        completedTasksCount > 0 && (
                            <>
                                🎉 Tuyet voi! Ban da hoan thanh {completedTasksCount} nhiem vu.
                                {
                                    activeTasksCount > 0 && `con lai ${activeTasksCount} nhiem vu nua thoi.`
                                }
                            </>
                        )
                    }
                    {
                        completedTasksCount === 0 && activeTasksCount > 0 && (
                            <>
                                Hay bat dau lam {activeTasksCount } nhiem vu nao.
                            </>
                        )
                    }
                </p>
            </div>
        )}
    </>
}

export default Footer