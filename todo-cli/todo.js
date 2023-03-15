/* eslint-disable no-undef */
const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    return all.filter((task) => {
      return task.dueDate < today;
    });
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    return all.filter((task) => {
      return task.dueDate === today;
    });
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    return all.filter((task) => {
      return task.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    const formattedItems = list.map(item => {
      return `${item.completed ? '[x]' : '[ ]'} ${item.title} ${item.dueDate === today ? '' : item.dueDate}`
    });
  
    return formattedItems.join('\n').trim();
  }
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
    today,
    yesterday,
    tomorrow,
  };
};


module.exports = todoList;
