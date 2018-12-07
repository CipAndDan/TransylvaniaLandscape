function getTree() {
    // Some logic to retrieve, or generate tree structure
    var tree = [
        {
            text: "Category 1",
            nodes: [
                {
                    text: "Subcategory",
                    nodes: [
                        {
                            text: "Grandchild 1"
                        },
                        {
                            text: "Grandchild 2"
                        }
                    ]
                },
                {
                    text: "Child 2"
                }
            ]
        },
        {
            text: "Parent 2"
        },
        {
            text: "Parent 3"
        },
        {
            text: "Parent 4"
        },
        {
            text: "Parent 5"
        }
    ];
    return tree;
}

$(document).ready(function () {
    $('#tree').treeview({ data: getTree() });
});
