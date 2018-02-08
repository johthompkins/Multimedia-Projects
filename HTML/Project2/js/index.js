var model = {
  'Shopping': {
    'Buy AAs': false,
    'Get prescription': true
  },
  'Breakfast': {
    'Flip pancakes': false,
    'Scramble eggs': false,
    'Pour OJ': true
  },
  'Lucnh':{
  'get peanuts': false,
  'get jelly': true
}
};
var activeList = 'Breakfast';


//showTasks
function showTasks(listName) {
  $('.tasks').text('');
  var tasks = model[listName];  
  for (var taskName in tasks) {
    var taskElement = createTaskElement(listName, taskName);    
    $('.tasks').append(taskElement);
  }
  $(".task-plus").click(function(){
   addTaskFromInput(listName, $(".task-input").val());
  });
}
//addTaskFromInput
function addTaskFromInput(listName,taskName)
{
  model[listName][taskName] = false;
  showTasks(activeList);
}
//createTaskElement
function createTaskElement(listName, taskName) {
  var taskElement = $('<li></li>');
  var checkBox = $('<span class="fa"></span>'); 
  var remove = $('<span class="fa fa-window-close"></span>'); 
  taskElement.text(taskName); 
  taskElement.prepend(checkBox);
  taskElement.append(remove);
  taskElement.click(function(e){
    toggleTaskComplete(listName, taskName);
  });  
  
  remove.click(function(){
    removeTask(listName,taskName);
  });
  
  if (model[listName][taskName] === true)
  {
    taskElement.addClass('checked');  
    checkBox.addClass('fa-check-square-o');
  }   
  else
    {
      checkBox.addClass('fa-square-o');
    }
  
  return taskElement;
}
//removeTask
function removeTask(listName, taskName)
{
  delete model[listName][taskName];
  showTasks(activeList);
}
//toggleTaskComplete
function toggleTaskComplete(listName, taskName)
{
  var isComplete = model[listName][taskName];
  model[listName][taskName] = !isComplete;
  showTasks(activeList);
}
//createListElement
function createListElement(listName) 
{
  var listElement = $('<li></li>');
  var checkBox = $('<span class="fa fa-square-o"></span>'); 
  var remove = $('<span class="fa fa-window-close"></span>'); 
  listElement.click(function(){
    activeList = listName;
    showLists();
    showTasks(activeList);
  });
  listElement.text(listName); 
  listElement.append(remove);
  remove.click(function(){
  removeList(listName);
  });  
  return listElement;
} 
//addListFromInput
function addListFromInput(listName)
{
  model[listName] = {};
  showLists();
}
//show lists
function showLists() {
  $(".lists").text("");
    for (var list in model)
     {
      var listElement = createListElement(list)
    $('.lists').append(listElement);
     }
   $(".list-plus").click(function(){
   addListFromInput($(".list-input").val());
  });
}  
//remove list
function removeList(listName)
{
  delete model[listName];
  showLists();
}


showTasks(activeList);
showLists(activeList);