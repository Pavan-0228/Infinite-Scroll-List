import React, { useState, useEffect, useRef } from "react";
import "./List.css";

const List = () => {
    const [visibleItems, setVisibleItems] = useState(10);
    const [loading, setLoading] = useState(false);
    const listContainerRef = useRef(null);

    const items = Array.from(
        { length: 1000 },
        (_, index) => `Item ${index + 1}`
    );

    const handleScroll = () => {
        if (listContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } =
                listContainerRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
                setLoading(true);
            }
        }
    };

    useEffect(() => {
        if (loading && visibleItems < items.length) {
            const loadMoreItems = setTimeout(() => {
                setVisibleItems((prev) => Math.min(prev + 10, items.length));
                setLoading(false);
            }, 500);
            return () => clearTimeout(loadMoreItems);
        }
    }, [loading, visibleItems, items.length]);

    useEffect(() => {
        const container = listContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="list-container" ref={listContainerRef}>
            {items.slice(0, visibleItems).map((item, index) => (
                <div key={index} className="list-item">
                    {item}
                </div>
            ))}
            {loading && <div className="loading">Loading...</div>}
            {visibleItems > 9 && (
                <button
                    className="back-to-top"
                    onClick={() =>
                        listContainerRef.current.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    Back to Top
                </button>
            )}
        </div>
    );
};

export default List;
