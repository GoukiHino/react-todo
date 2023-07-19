import React from "react";
import TodoContainer from "../components/todo/TodoContainer";
import Layout from "../components/template/Layout";

const HomePage = () => {
    return (
        <Layout>
            <TodoContainer/>
        </Layout>
    );
};

export default HomePage;
