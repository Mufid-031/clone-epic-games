const Category = ({icon, title}: {icon: JSX.Element; title: string}): JSX.Element => {
    return(
        <section className="p-5 bg-gray-700 mt-10 mr-11 rounded-lg">
            <div className="flex justify-between">
                <h3 className="text-2xl text-white font-bold cursor-pointer flex items-center gap-3">{icon} {title}</h3>
                <button className="btn btn-outline btn-ghost">View More</button>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <div className="h-80 bg-slate-600 rounded-lg"></div>
                <div className="h-80 bg-slate-600 rounded-lg"></div>
                <div className="h-80 bg-slate-600 rounded-lg"></div>
                <div className="h-80 bg-slate-600 rounded-lg"></div>
            </div>
        </section>
    )
}

export default Category;