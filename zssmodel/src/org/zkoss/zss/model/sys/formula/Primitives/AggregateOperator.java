package org.zkoss.zss.model.sys.formula.Primitives;

public class AggregateOperator extends LogicalOperator {
    BinaryFunction binaryFunction;
    public AggregateOperator(BinaryFunction f){
        super();
        binaryFunction = f;
    }
}