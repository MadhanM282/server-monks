

<div className="container-fluid ">
    <div className="big-box align-self-center">
        <div
            className="row mb-0 pb-0"
            style={{ borderBottom: "3px solid whitesmoke", padding: "0px 50px 0px 50px", justifyContent: "space-between" }}
        >
            <div className="col-md-8">
                <h3 className="text-left">
                    {clubList.clubs.length} Clubs
                </h3>
            </div>

            <ul className="list-inline">
                <button
                    className="list-inline-item btn"
                    onClick={{}}
                >
                    Relevance
                </button>
                <button
                    className="btn list-inline-item"
                    onClick={{}}
                >
                    Cost for Two
                </button>
                <button
                    className="list-inline-item btn"
                    onClick={{}}
                >
                    Rating
                </button>
                <button className="list-inline-item btn filter">
                    Filters
                    <img
                        // src="../../../Icons/filter.svg"
                        // 'Icons/filter.svg'
                        alt="filter icon"
                        style={{
                            width: "30px",
                            height: "30px",
                            border: "1.5px solid #fc8019 ",
                            borderRadius: "50%",
                            marginLeft: "8px",
                        }}
                    />
                </button>
            </ul>
        </div>
    </div>
</div>