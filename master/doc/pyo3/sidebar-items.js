initSidebarItems({"fn":[["prepare_freethreaded_python","Prepares the use of Python in a free-threaded context."]],"macro":[["create_exception","Defines a new exception type."],["create_exception_type_object","`impl $crate::type_object::PyTypeObject for $name` where `$name` is an exception newly defined in Rust code."],["impl_exception_boilerplate","The boilerplate to convert between a Rust type and a Python exception."],["import_exception","Defines a Rust type for an exception defined in Python code."],["py_run","A convenient macro to execute a Python code snippet, with some local variables set."],["pyobject_native_type",""],["pyobject_native_type_convert",""],["pyobject_native_type_core",""],["pyobject_native_type_extract",""],["pyobject_native_type_fmt",""],["pyobject_native_type_named",""],["pyobject_native_type_sized",""],["pyobject_native_var_type",""],["raw_pycfunction","Returns the function that is called in the C-FFI."],["wrap_pyfunction","Returns a function that takes a [Python] instance and returns a Python function."],["wrap_pymodule","Returns a function that takes a [Python] instance and returns a Python module."]],"mod":[["buffer","`PyBuffer` implementation"],["class","Python object protocols"],["conversion","Conversions between various states of Rust and Python types and their wrappers."],["exceptions","Exception types defined by Python."],["ffi","Raw ffi declarations for the c interface of python"],["freelist","Free allocation list"],["marshal","Support for the Python `marshal` format. Not supported in limited API builds."],["once_cell",""],["panic",""],["prelude","A collection of items you most likely want to have in scope when working with pyo3"],["proc_macro","The proc macros, which are also part of the prelude."],["pycell","Includes `PyCell` implementation."],["pyclass","`PyClass` and related traits."],["pyclass_init","Initialization utilities for `#[pyclass]`."],["pyclass_slots","This module contains additional fields for `#[pyclass]`.. Mainly used by our proc-macro codes."],["type_object","Python type object information"],["types","Various types defined by the Python interpreter such as `int`, `str` and `tuple`."]],"struct":[["GILGuard","RAII type that represents the Global Interpreter Lock acquisition. To get hold of a value of this type, see `Python::acquire_gil`."],["GILPool","A RAII pool which PyO3 uses to store owned Python references."],["Py","A Python object of known type T."],["PyAny","A Python object with GIL lifetime"],["PyDowncastError","Error that indicates a failure to convert a PyAny to a more specific Python type."],["PyErr","Represents a Python exception that was raised."],["Python","Marker type that indicates that the GIL is currently held."]],"trait":[["PyErrArguments","Helper conversion trait that allows to use custom arguments for lazy exception construction."],["PyNativeType","Types that are built into the Python interpreter."]],"type":[["PyObject","A commonly-used alias for `Py<PyAny>`."],["PyResult","Represents the result of a Python call."]]});