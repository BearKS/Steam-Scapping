import React from 'react'

export const GameCard = ({
    data,
}) => {
    const {
        gameData,
    } = data

    const {
        name,
        description,
        cover_url,
        tag,
        review,
    } = gameData
    return (
        <div className="px-4">
            <h1 className="py-4 text-2xl font-bold text-white">
                {name}
            </h1>
            <div className="grid grid-cols-8 gap-4 pb-8">
                <div class="col-span-3">
                    <img src={cover_url} className="rounded-md" alt="" />
                </div>
                <div class="col-span-4">
                    <h1 className="font-bold text-white">Description</h1>
                    <h1 className="mt-4 text-sm text-white">
                        {
                            description
                        }
                    </h1>
                    <div className="grid grid-cols-8 mt-2">
                        <div class="col-span-6">
                            <div className="flex flex-wrap">
                                {
                                    tag.map((label) => (
                                        <div className="px-2 m-1 text-sm text-orange-600 bg-orange-200 rounded-full">
                                            +{label.replace('-')}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-8 gap-5 pb-8">
                <div class="col-span-5 bg-white">
                </div>
                <div class="col-span-2">
                    <h1 className="font-bold text-white">Review</h1>
                    <div className="flex justify-center p-4 mt-2 space-x-10 bg-white rounded-md">
                        <div className="flex flex-row items-center p-4 space-x-10">
                            <h1 className="text-2xl font-bold text-green-700">{review}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}