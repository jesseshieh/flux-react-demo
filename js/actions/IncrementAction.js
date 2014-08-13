function IncrementAction(amount) {
  this.amount = amount;
}

IncrementAction.prototype.perform = function(data) {
  data.count += this.amount;
  return data;
};

module.exports = IncrementAction;
